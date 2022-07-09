---
title: How to have untruncated logs in your Phoenix console 
date: '2022-07-04T18:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ['elixir', 'phoenix']
---
By default, logs in the console are truncated when they're too long, in order to get the full logs, simply add the following to your config file.

```elixir
# dev.exs
config :logger,
  truncate: :infinity
```