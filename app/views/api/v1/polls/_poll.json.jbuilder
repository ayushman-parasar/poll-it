json.id obj.id
json.title obj.title
json.options obj.options do |option|
  json.id option.id
  json.title option.title
end
json.created_at obj.created_at
json.updated_at obj.updated_at