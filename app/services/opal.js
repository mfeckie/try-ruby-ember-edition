/* globals Opal */
import OpalService from 'ember-cli-opal-rb/services/opal';

export default OpalService.extend({
  init: function () {
    this.run(stdoutHijack);
  },
  runWithHijackedSTDOUT: function (code) {
    var compiler = Opal.RubyOpalCompiler.$instance();
    compiler.$run_code(code);
    return compiler.output;
  }
});

var stdoutHijack = `
class Outputter
    def results
       @results ||= []
    end

    def puts(str)
        results << str
    end
end

class RubyOpalCompiler
    def self.instance
       @instance ||= self.new
    end

    def output
       @output
    end

    def initialize()
        @output = []
    end

    def run_code(input_code)
        begin
            code = Opal.compile(input_code)
            new_stdout = Outputter.new
            old_stdout, $stdout = $stdout, new_stdout  #replace STDOUT with Outputter
            eval_code code
            @output = $stdout.results
            $stdout = old_stdout  # return to original STDOUT
        rescue => err
            log_error err
        end
    end

    def compile(str)
       Opal.compile(str)
    end

    def eval_code(js_code)
       \`eval(js_code)\`
    end

    def log_error(err)
       print_to_output "#{err}\n#{\`err.stack\`}"
    end

    def print_to_output(str)
       @output << str
    end
end
`;
