#!/usr/bin/env zx

/**
 * Start Script
 * 
 * This start script is designed such as to make the process of starting and managing the discord
 * bot a lot easier.  It is made with zx to make running this a lot easier.
 */

const options = process.argv.slice(3);
let startParameters = {
  build: false, // Should the app be rebuilt?
  dev: false, // Should the app be booted in development mode?
  token: null, // The Discord Bot token
}

// Collect all of the options and assemble the start params
options.map((opt, index) => {
  // Build params
  if (['--build', '-b'].includes(opt)) startParameters.build = true;
  if (['--dev'].includes(opt)) startParameters.dev = true;
  if (['--token', '-t'].includes(opt)) {
    const token = options[index+1];

    if (!token) throw new Error("Token must be defined to use token option.")
    else startParameters.token = token;
  }
});



console.log(startParameters);