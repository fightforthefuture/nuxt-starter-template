module.exports = {
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'A Fight for the Future website'
    },
    domainName: {
      'type': 'string',
      'required': false,
      'message': 'Domain name (without www)',
      'default': 'example.com'
    },
    googleAnalyticsId: {
      'type': 'string',
      'required': false,
      'message': 'Google Analytics ID',
      'default': null
    },
    actionNetworkPetitonId: {
      'type': 'string',
      'required': false,
      'message': 'Action Network Petition ID',
      'default': null
    },
    // Can't seem to make the author prompt *not* display...
    author: {
      'type': 'string',
      'required': false,
      'message': 'Author (This isn\'t used for anything. Just hit enter...)',
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}',
  skipInterpolation: "**/*.{vue,yml}"
};

