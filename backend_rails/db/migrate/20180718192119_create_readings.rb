class CreateReadings < ActiveRecord::Migration[5.2]
  def change
    create_table :readings do |t|
      t.string :reading_name

      t.belongs_to :user
    end
  end
end
