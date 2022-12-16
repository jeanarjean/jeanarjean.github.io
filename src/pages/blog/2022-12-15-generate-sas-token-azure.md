---
title: Generate a SAS Token for Azure Event Hub in Elixir
date: '2022-12-15T18:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ['elixir']
---

Here's how to create a SAS Token for Azure Event Hub using the latest Erlang/OTP 25 in Elixir.
This is based on the Microsoft Documentation available [here](https://learn.microsoft.com/en-us/rest/api/eventhub/generate-sas-token)

```elixir
  def generate_sas_token(shared_key_name, shared_key, uri) do
    encoded_uri = URI.encode_www_form(uri)

    # Desired validity time for the token,
    # this token will be valid for one day.
    signed_expiry = 
      DateTime.utc_now() 
        |> DateTime.add(1, :day) 
        |> DateTime.to_unix()

    parameters = [encoded_uri, signed_expiry]

    string_to_sign = Enum.join([encoded_uri, signed_expiry], "\n")

    signature = :crypto.macN(:hmac, :sha256, shared_key, string_to_sign, 32)

    sig = signature |> :base64.encode() |> URI.encode_www_form()

    "SharedAccessSignature sr=#{encoded_uri}&sig=#{sig}&se=#{signed_expiry}&skn=#{shared_key_name}"
  end
```