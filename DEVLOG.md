# DEVLOG

Educational notes to self.

* some pages were crashing with the error that a certain variable was undefined. I kept looking around the program, thinking that I had wrongly set some variables, but it turned out that what the error was actually telling me was that the variable the program was trying to load didn't exist (hence _undefined_). The solution, once this was understood, was easy to track down, since I saw that the variable wasn't being set in the redux store. 