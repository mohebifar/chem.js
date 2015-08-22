var grunt = require('grunt');
require('load-grunt-tasks')(grunt);

grunt.initConfig({
  babel: {
    options: {
      sourceMap: true,
      modules: 'ignore'
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['**/*.js', '!intro.js', '!outro.js'],
        dest: '.tmp/es5/all'
      }]
    }
  },
  concat: {
    options: {
      sourceMap: true,
      separator: '\n'
    },
    dist: {
      src: [
        'src/intro.js',
        '.tmp/es5/all/**/*.js',
        'src/outro.js'
      ],
      dest: 'dist/chem.js'
    },
    es6: {
      src: ['src/**/*.js', '!src/intro.js', '!src/outro.js'],
      dest: '.tmp/es6/concat.js'
    }
  },
  uglify: {
    options: {
      sourceMap: true
    },
    build: {
      files: {
        'dist/chem.min.js': ['dist/chem.js']
      }
    }
  },
  watch: {
    options: {
      spawn: false
    },
    scripts: {
      files: ['src/**/*.js'],
      tasks: ['default']
    },
    elements: {
      files: ['src/data/elements.json'],
      tasks: ['shell:elements']
    }
  },
  jshint: {
    options: {
      jshintrc: '.jshintrc'
    },
    allFiles: [
      'src/**/*.js', '!src/intro.js', '!src/outro.js'
    ]
  },
  clean: {
    tmp: ['.tmp']
  },
  shell: {
    options: {
      stderr: false
    },
    elements: {
      command: 'node data.js'
    }
  }
});

grunt.registerTask('default', ['clean', 'babel', 'concat:dist']);

grunt.registerTask('build', ['default', 'uglify']);