json.poll do
  json.poll_id @poll.id
  json.poll_title @poll.title
  json.(@poll, :created_at, :updated_at)
  json.options @poll.options
end