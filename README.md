# Liana Technologies codetest

## About

This responsive HTML page was built with React.js, Bootstrap and icons from Material-ui.

## Get started

Clone the project onto your computer and install required packages with

```shell
git clone https://github.com/jkerola/lianaCodeTest.git
cd liana
npm install
```

then start the development server with
```shell
npm start
```

HIGHLY RECOMMENDED to open a separate terminal window and start 
the development database with
```shell
npm run db 
```
as without this email subscription and RSS feed fetching will fail.

The HTML should now be viewable at http://localhost:3000.

Email addresses submitted via the page can be viewed at http://localhost:3001/subscribers.

## Project details

Project modeled after image [here.](https://www.dropbox.com/s/guv666t1m2rvj6p/Liana%20Technologies%20-%20Recruitment%20Demo.psd?dl=0)

The page is not a 1:1 recreation, but as close as I could get.
Images and logos were extracted from the template with Krita and cropped with MSPaint.
Icons are imported from @materials-ui/icons package, with CSS styling to match.

Responsiveness was achieved by using components provided by [React-Bootstrap](https://react-bootstrap.github.io/). Functionality was manually tested on multiple machines as well as emulation due to the scope of the project.

Development database and server uses [JSON-server](https://www.npmjs.com/package/json-server).

Parallax effect was achieved with [react-scroll-parallax](https://www.npmjs.com/package/react-scroll-parallax).

Animated numbers were created with [react-countup](https://www.npmjs.com/package/react-countup) to achieve crossplatform support, as custom CSS animations did not work on my personal phone.

RSS feed parsing was done with [rss-parser](https://www.npmjs.com/package/rss-parser).
Due to CORS preventing direct access to [LianaTech.com/blog.rss](https://lianatech.com/resources/blog.rss) a local copy the feed is hosted with JSON-server.
