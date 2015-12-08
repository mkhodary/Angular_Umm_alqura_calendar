# kdate Angular Directive and Filter for Umm Al Qura and Gregorian Calendar
<br>
Angular Directive is developed by **"Mohamed Elkhodary"** and is available for use as in *Terms of Use* section.
<br>
<br>
It provides date picker and date display "Angular filter" for "Gregorian" calendar and "Umm alqura calendar" in two languages: english and Arabic (Arabic and Arabic/Egypt).
<br>
This sample is built on http://keith-wood.name/calendarsPicker.html by including an angular directive that works as a wrapper on top of keith-wood jquery library.
<br>
For more information about the core jquery library, visit: http://keith-wood.name/calendarsPicker.html
<br>
<br>
# Project structure
1. *Index.html* is a representation of html page that could contain the calendar picker. It has different implementations for demo purposes only. <br>
2. *app.module.js* representing existing angular application that you need to include the kdate to it.
3. *server.js & folder node_modules* are used to be able to run nodejs server to test it. For more information regarding how to start and test,  check *How to test it* section. <br>
3. *js folder* includes all required javascript files that could be used by keith-wood jquery library. If you're not implementing Arabic language, you could remove language-specific javascript files. You could also replace/add language javascript as dependancies as per your need to support new cultures. Refer back to http://keith-wood.name/calendarsPicker.html for more information.<br>
4. *css folder* contains the css files to update library styles. Feel free to change it to match destination application look and feel.<br>
5. *kdate folder* has the custom module, directive and filter developed by me.
<br> 
<br>

# How to test it

1. Make sure that nodejs is installed.<br>
2. Clone the repository then run "node server.js" and you can check it then on http://localhost:8080/
3. You'll find different implementations of both calendar and filter. Feel free to contact me if you need any support.
<br> 
<br>

# How Include kdate on your project

1. Add required dependencies on the same order as in index.html. Dependancies include js files and css file.
2. Include kdate in your main angular module.
3. Add all files in kdate folder.
<br> 
<br>

# Terms of Use

<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
<br>
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
<br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
f