class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy, as: :likeable

  validates :title, presence:true,
                    length: { minimum: 5 }
end