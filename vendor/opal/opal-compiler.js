/*
 The following is passed through Opal and the compiled javascript is below.

 The major issue in getting this working was the need to hijack STDOUT, hence the Outputter class

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
        `eval(js_code)`
     end

     def log_error(err)
        print_to_output "#{err}\n#{`err.stack`}"
     end

     def print_to_output(str)
        @output << str
     end
 end
 */

(function ($opal) {
    var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $gvars = $opal.gvars;

    $opal.add_stubs(['$<<', '$results', '$new', '$compile', '$eval_code', '$log_error', '$print_to_output']);
    (function ($base, $super) {
        function $Outputter() {
        }
        ;
        var self = $Outputter = $klass($base, $super, 'Outputter', $Outputter);

        var def = self._proto, $scope = self._scope;

        def.results = nil;
        def.$results = function () {
            var $a, self = this;

            return ((($a = self.results) !== false && $a !== nil) ? $a : self.results = []);
        };

        return (def.$puts = function (str) {
            var self = this;

            return self.$results()['$<<'](str);
        }, nil);
    })(self, null);
    return (function ($base, $super) {
        function $RubyOpalCompiler() {
        }
        ;
        var self = $RubyOpalCompiler = $klass($base, $super, 'RubyOpalCompiler', $RubyOpalCompiler);

        var def = self._proto, $scope = self._scope;

        def.output = nil;
        $opal.defs(self, '$instance', function () {
            var $a, self = this;
            if (self.instance == null)
                self.instance = nil;

            return ((($a = self.instance) !== false && $a !== nil) ? $a : self.instance = self.$new());
        });

        def.$output = function () {
            var self = this;

            return self.output;
        };

        def.$initialize = function () {
            var self = this;

            self.output = [];
            return self.compiled_lines = [];
        };

        def.$run_code = function (input_code) {
            var $a, self = this, code = nil, new_stdout = nil, old_stdout = nil, err = nil;
            if ($gvars.stdout == null)
                $gvars.stdout = nil;

            try {
                code = (($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$compile(input_code);
                new_stdout = (($a = $scope.Outputter) == null ? $opal.cm('Outputter') : $a).$new();
                $a = [$gvars.stdout, new_stdout], old_stdout = $a[0], $gvars.stdout = $a[1];
                self.$eval_code(code);
                self.output = $gvars.stdout.$results();
                return $gvars.stdout = old_stdout;
            } catch ($err) {
                if (true) {
                    err = $err;
                    return self.$log_error(err)
                } else {
                    throw $err;
                }
            }
            ;
        };

        def.$compile = function (str) {
            var $a, self = this;

            return (($a = $scope.Opal) == null ? $opal.cm('Opal') : $a).$compile(str);
        };

        def.$eval_code = function (js_code) {
            var self = this;

            return eval(js_code);
        };

        def.$log_error = function (err) {
            var self = this;

            return self.output = [("" + (err) + "\n" + (err.stack))]; //TODO - Maybe a separate area for errors?
        };
    })(self, null);
})(Opal);
