json.polls @polls do |poll| 
  json.partial! "poll", obj: poll 
end