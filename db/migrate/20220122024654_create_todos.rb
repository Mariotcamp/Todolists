class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.references :user, foreign_key: true
      t.string :content, null:false
      t.boolean :is_completed, default:false
      t.timestamps
    end
  end
end
