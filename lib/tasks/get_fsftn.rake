#list_market
#
require 'open-uri'
namespace :get do
  task :fsftn => :environment do

  @base_url = "http://fsftn.org/pipermail/mailinglist_fsftn.org/"
  @current_year_month = Time.now.strftime("%Y-%B")
  @archive_end = "/date.html"
  @url = @base_url + @current_year_month + @archive_end
  puts @url
  @response = ""

  open(@url, "User-Agent" => "#Welkin's#Ruby#Scrapper", "From" => "test@test.com", "Referer" => "http://ilugc.in") { |u| 
    puts "Fetched document: #{u.base_uri}"
    puts "\t Content Type: #{u.content_type}\n"
    puts "\t Charset: #{u.charset}\n"
    puts "\t Last Modified: #{u.last_modified}\n\n"

    @page_updated = Time.parse(u.last_modified.to_s)

    @response = u.read
  }
  
  if Message.tagged_with("fsftn").all.count > 0
    last_modified_time = Message.tagged_with("fsftn").find(:first, :order => "last_modified DESC", :limit => 1).last_modified

    if @page_updated > last_modified_time
 
      doc = Hpricot(@response)

      (doc/"/html/body/ul[2]/li/a[1]").each do |l|
        @source = @base_url + @current_year_month + "/" + l.attributes['href']
        @result = open(@source, "User-Agent" => "#Welkin's#Ruby#Scrapper") 

        message_time = Time.parse(@result.last_modified.to_s)
    
        if message_time > last_modified_time
          puts message_time.to_s + " greater than " + last_modified_time.to_s
          in_doc = Hpricot(@result)
          @body = in_doc/"/html/body/pre"
          puts l.inner_html
          puts "====="
          
          if !check_checksum(@body.inner_html)
            Message.create!(:body => @body.inner_html, :title => l.inner_html, :tag_list => "fsftn", :source => @source, :last_modified => message_time)
          end
        end
      end
    end
  else
    doc = Hpricot(@response)

    (doc/"/html/body/ul[2]/li/a[1]").each do |l|
      @source = @base_url + @current_year_month + "/" + l.attributes['href']
      @result = open(@source, "User-Agent" => "#Welkin's#Ruby#Scrapper") 

      message_time = Time.parse(@result.last_modified.to_s)
    
      in_doc = Hpricot(@result)
      @body = in_doc/"/html/body/pre"
      puts @body.inner_html
      puts "====="
      if !check_checksum(@body.inner_html)
        Message.create!(:body => @body.inner_html, :title => l.inner_html, :tag_list => "fsftn", :source => @source, :last_modified => message_time)
      end
    end
  end
end
task :ilugc => :environment do

  @base_url = "http://ae.iitm.ac.in/pipermail/ilugc/"
  @current_year_month = Time.now.strftime("%Y-%B")
  @archive_end = "/date.html"
  @url = @base_url + @current_year_month + @archive_end
  puts @url
  @response = ""

  open(@url, "User-Agent" => "#Welkin's#Ruby#Scrapper", "From" => "test@test.com", "Referer" => "http://ilugc.in") { |u| 
    puts "Fetched document: #{u.base_uri}"
    puts "\t Content Type: #{u.content_type}\n"
    puts "\t Charset: #{u.charset}\n"
    puts "\t Last Modified: #{u.last_modified}\n\n"

    @page_updated = Time.parse(u.last_modified.to_s)

    @response = u.read
  }
  
  if Message.tagged_with("ilugc").all.count > 0
    last_modified_time = Message.tagged_with("ilugc").find(:first, :order => "last_modified DESC", :limit => 1).last_modified

    if @page_updated > last_modified_time
 
      doc = Hpricot(@response)

      (doc/"/html/body/ul[2]/li/a[1]").each do |l|
        @source = @base_url + @current_year_month + "/" + l.attributes['href']
        @result = open(@source, "User-Agent" => "#ListMarket's#Ruby#Scrapper") 

        message_time = Time.parse(@result.last_modified.to_s)
    
        if message_time > last_modified_time
          puts message_time.to_s + " greater than " + last_modified_time.to_s
          in_doc = Hpricot(@result)
          @body = in_doc/"/html/body/pre"
          puts @body.inner_html
          puts "====="
          if !check_checksum(@body.inner_html)
            Message.create!(:body => @body.inner_html, :title => l.inner_html, :tag_list => "ilugc", :source => @source, :last_modified => message_time)
          end
        end
      end
    end
  else
    doc = Hpricot(@response)

    (doc/"/html/body/ul[2]/li/a[1]").each do |l|
      @source = @base_url + @current_year_month + "/" + l.attributes['href']
      @result = open(@source, "User-Agent" => "#ListMarket's#Ruby#Scrapper") 

      message_time = Time.parse(@result.last_modified.to_s)
    
      in_doc = Hpricot(@result)
      @body = in_doc/"/html/body/pre"
      puts @body.inner_html
      puts "====="
      if !check_checksum(@body.inner_html)
        Message.create!(:body => @body.inner_html, :title => l.inner_html, :tag_list => "ilugc", :source => @source, :last_modified => message_time)
      end
    end
  end
end

  task :all => [:fsftn, :ilugc]

end



def check_checksum(body)
  @message = Message.all
  @outer = Digest::MD5.hexdigest(body)
  @message.each do |m|
    inner = Digest::MD5.hexdigest(m.body)
    if @outer == inner
      puts m.id matched
      return true
    else
      return false
    end
  end
end
    

