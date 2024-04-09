class CreateComments < ActiveRecord::Migration[7.1]
  def change
    create_table :comments do |t|
      t.text :body
      t.string :feature_id
      t.timestamps
    end

    add_foreign_key :comments, :features, column: :feature_id, primary_key: :id
  end
end
