# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	templateData:
    site:
      title: "Elliott Williams"
      styles: [
        "/styles/style.css"
      ]
      scripts: [
        
      ]

    getMonthName: (i) ->
      ['January', 'February', 'March', 'April', 'June', 'July',
       'August', 'September', 'October', 'November', 'December'][i]

  collections:
    essays: ->
      @getCollection("html").findAllLive({relativeOutDirPath: 'essays'},
        [{date:1}])


  plugins:
    assets:
      retainName: 'yes'

}

# Export the DocPad Configuration
module.exports = docpadConfig
