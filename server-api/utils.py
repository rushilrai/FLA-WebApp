from printy import printy, inputy
import sys

# Mode Variables---------------------------
DEBUG_MODE = True
APP_PREFIX = 'api'
#------------------------------------------

# class for handling CLI messages
class _message:

    # CLI message for success
    def success (self, msg):
        printy ('[n]\[' + APP_PREFIX + ':suc\]@ ' + msg)
    
    # CLI message for debug
    def error (self, msg):
        printy ('[r]\[' + APP_PREFIX + ':err\]@ ' + msg)
    
    # CLI prompt for input
    def prompt (self, msg):
        thisInput = inputy ('[c]\[' + APP_PREFIX + ':prt\]@ ' + msg + '> ')
        return thisInput
    
    def delete_last (self):
        sys.stdout.write("\033[F") #back to previous line.
        sys.stdout.write("\033[K") #clear line.

# class for handling development debugging
class _debug:

    # set mode for display or not
    def __init__ (self, mode=False):
        self.mode = mode

    # debug message for success
    def success (self, msg):
        if self.mode:
            printy ('[n]\[deb:suc\]@ ' + msg)
    
    # debug message for error
    def error (self, msg):
        if self.mode:
            printy ('[r]\[deb:err\]@ ' + msg)

    # prompt for input
    def prompt (self, msg):
        if self.mode:
            thisInput = inputy ('[c]\[deb:prt\]@ ' + msg + '> ')
            return thisInput

# init objects for import 
message = _message ()
debug = _debug (DEBUG_MODE)

# test functions
# message.success ('This is in green  ')
# message.error ('This is in red')
# message.prompt ('This is in blue')

# debug.success ('Yep')
# debug.error ('Nope')
# debug.prompt ('Prompt')