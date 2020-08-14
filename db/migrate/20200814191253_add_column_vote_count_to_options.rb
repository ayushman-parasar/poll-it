class AddColumnVoteCountToOptions < ActiveRecord::Migration[6.0]
  def change
    add_column :options, :option_count, :integer, default:0
  end
end
