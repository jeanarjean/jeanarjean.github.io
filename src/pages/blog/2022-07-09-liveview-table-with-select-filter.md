---
title: How to create Phoenix LiveView tables with search filter
date: '2022-07-09T18:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ['elixir', 'phoenix', 'liveview']
---

A Phoenix project with liveview set up in order to do this tutorial, if you don't have one run in your terminal:

```bash
mix phx.new Tutorial --app tutorial --module Tutorial --database postgres
mix ecto.create
```

Now that you have a working project.
Start by scaffolding migration, schema, context and liveviews for a product schema that has a name and category column.

```bash
mix phx.gen.live Store Product products name:string category:string
mix ecto.migrate
```

Add the routes to router.ex

```elixir
# router.ex
  scope "/", TutorialWeb do
    pipe_through :browser

    get "/", PageController, :index

    # Add this section
    live "/products", ProductLive.Index, :index
    live "/products/new", ProductLive.Index, :new
    live "/products/:id/edit", ProductLive.Index, :edit

    live "/products/:id", ProductLive.Show, :show
    live "/products/:id/show/edit", ProductLive.Show, :edit
  end
```

Navigating to localhost:4000/products should render a page looking like this

![](./index.png)

Change category to a static enum in order to restrict the kind of products the 
user can create.

```elixir
# product.ex
defmodule Tutorial.Store.Product do
  use Ecto.Schema
  import Ecto.Changeset

  schema "products" do
    field :category, Ecto.Enum, values: [:shirts, :pants, :shoes]
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(product, attrs) do
    product
    |> cast(attrs, [:name, :category])
    |> validate_required([:name, :category])
  end
end

```

A way to select a value from this enum is required when creating a product.
Phoenix a built-in way of doing this.

Change the `text_input` to the `select` line in your product_live/form_component.html.heex
```elixir
# product_live/form_component.html.heex
<div>
  <h2><%= @title %></h2>

  <.form
    let={f}
    for={@changeset}
    id="product-form"
    phx-target={@myself}
    phx-change="validate"
    phx-submit="save">

    <%= label f, :name %>
    <%= text_input f, :name %>
    <%= error_tag f, :name %>

    <%= label f, :category %>
    <%= select(f, :category, ["Shirts": :shirts, "Pants": :pants, "Shoes": :shoes]) %>

    <%= error_tag f, :category %>

    <div>
      <%= submit "Save", phx_disable_with: "Saving..." %>
    </div>
  </.form>
</div>
```

The form will now look like this.
![](./form.png)

Create a product.

![](./index2.png)

Add a filter to only visualize the products of a certain category.   

Change the `rowspan` of the Name and Edit column to 2. Then add a second table header row
with a form inside it. This form is used to filter the table by category. Feel free to call `humanize` on the `product.category` too to have prettier display of the value.

```elixir
# product_live/index.html.heex
<h1>Listing Products</h1>

<%= if @live_action in [:new, :edit] do %>
  <.modal return_to={Routes.product_index_path(@socket, :index)}>
    <.live_component
      module={TutorialWeb.ProductLive.FormComponent}
      id={@product.id || :new}
      title={@page_title}
      action={@live_action}
      product={@product}
      return_to={Routes.product_index_path(@socket, :index)}
    />
  </.modal>
<% end %>

<table>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th>Category</th>

      <th rowspan="2"></th>
    </tr>
    <tr>
      <th>
        <form phx-change="filter-category">
          <select name="category">
            <option value="All">All</option>
            <%= for category <- [:shirts, :pants, :shoes] do %>
              <option value={category} selected={category == @category_filter}><%= humanize(category) %></option>
            <% end %>
          </select>
        </form>
      </th>
    </tr>
  </thead>
  <tbody id="products">
    <%= for product <- @products do %>
      <tr id={"product-#{product.id}"}>
        <td><%= product.name %></td>
        <td><%= humanize(product.category) %></td>

        <td>
          <span><%= live_redirect "Show", to: Routes.product_show_path(@socket, :show, product) %></span>
          <span><%= live_patch "Edit", to: Routes.product_index_path(@socket, :edit, product) %></span>
          <span><%= link "Delete", to: "#", phx_click: "delete", phx_value_id: product.id, data: [confirm: "Are you sure?"] %></span>
        </td>
      </tr>
    <% end %>
  </tbody>
</table>

<span><%= live_patch "New Product", to: Routes.product_index_path(@socket, :new) %></span>
```

Handle the form events and store the value of the category filter inside the socket's assigns.
Change the mount function to add a default value to the category_filter assign.
Add an event handler for the filter-category event which will be triggered everytime there's a change
inside the form.

And finally adapt the list_products function to include take into account category_filter.

```elixir
# product_live/index.ex
defmodule TutorialWeb.ProductLive.Index do
  use TutorialWeb, :live_view

  alias Tutorial.Store
  alias Tutorial.Store.Product

  @impl true
  def mount(_params, _session, socket) do
    {:ok,
     socket
     |> assign(:category_filter, "All")
     |> assign(:products, list_products("All"))}
  end

  @impl true
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Product")
    |> assign(:product, Store.get_product!(id))
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Product")
    |> assign(:product, %Product{})
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Listing Products")
    |> assign(:product, nil)
  end

  @impl true
  def handle_event("delete", %{"id" => id}, socket) do
    product = Store.get_product!(id)
    {:ok, _} = Store.delete_product(product)

    {:noreply, assign(socket, :products, list_products(socket.assigns.category_filter))}
  end

  def handle_event("filter-category", %{"category" => category}, socket) do
    {:noreply,
     socket
     |> assign(:category_filter, category)
     |> assign(:products, list_products(category))}
  end

  defp list_products("All") do
    Store.list_products()
  end

  defp list_products(category_filter) do
    Store.list_products()
    |> Enum.filter(fn product ->
      {:safe, category} = html_escape(product.category)
      category == category_filter
    end)
  end
end
```

There you have it, a liveview table with a select filter!

![](./index3.png)

[Full commit here for reference](https://github.com/jeanarjean/phoenix-live-view-tutorials/commit/b7f1b6e186eb475488fdc5e71eae5e7c9b548d5d)

