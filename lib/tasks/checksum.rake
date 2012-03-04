#list_market

require 'digest/md5'

namespace :do do
  task :checksum => :environment do
    @messages = Message.all
    @messages.each do |m|
      outer = Digest::MD5.hexdigest(m.body);
      @messages.each do |n|
        inner = Digest::MD5.hexdigest(n.body);
        if outer ==  inner && m.id != n.id
          puts "Found a similar message(ids => #{m.id}, #{n.id})"
          n.delete
        end
      end
    end 
  end
end

