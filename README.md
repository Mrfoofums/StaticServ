# StaticServ
A NodeJs Static File server using only NodeJs Core. Useful for bootstrapping web projects without wasting time on configuration.(Downloading dependencies is pretty easy. This repo is purely for getting
rid of boilerplate procedures involved with starting a new web project, and launching a static file server(that you can configure entirley) without banging your head on the desk or looking anything up at creation time.
Comes with a typical folder structure(for me) and some plugins/libraries that I typically find myself using.

Including:
Bootstrap
scrollTo
jQUery
parallax


TODO:
Remove 'mime' package dependency from server.js. 
Improve logging(read->add logging)


HOW TO USE:
1)Install node onto your computer. https://nodejs.org/en/
2)Clone the repo to anywhere on your machine
3)Run the command 'node server.js' in the folder you cloned the repo to.
  Note:You will need to ->npm install mime<-otherwise the server will yell at you. This will be fixed in like 4 days or whenever I
  get around to it.

You can now work on that hot new website without the weird issues loading pages from your filesystem creates when testing. 
