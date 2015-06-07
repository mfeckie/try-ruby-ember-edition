[ ![Codeship Status for mfeckie/try-ruby-ember-edition](https://codeship.com/projects/f7b5a730-b722-0132-3ee2-16eebaf9774f/status?branch=master)](https://codeship.com/projects/71230)

#TryRuby - Try Ruby Ember Edition

##Why?

I've been involved in a couple of RailsGirls workshops now and, although amazing, TryRuby doesn't seem to cope too well with a room of 50 people hitting it regularly.

I've also been watching Ember.js and Opal.rb very closely and thought perhaps there could be a version of TryRuby that could be run locally (or remotely) in a faster way than TryRuby.

The major thing that sets this apart is that the Ruby code is compiled to JavaScript on the client side and doesn't need to keep hitting the server.  This leads to a much nicer, faster experience and allows the participants to play with Ruby in a non-threatening way (it's just a webpage right!), with fewer delays.

##Still TODO

 - Would be nice if all output didn't require a call to puts, i.e. more like a REPL


# Dependencies

 - Ember.js for frontend stuff
 - Foundation for prettiness
 - Ember-cli for all build management
 - Showdown for markdown rendering

# License

The TryRuby - Ember Edition is licensed under the [MIT License](http://opensource.org/licenses/MIT)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
