(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"!authservice.loggedIn()\"></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    @import url('https://fonts.googleapis.com/css?family=Fira+Sans|Ubuntu&display=swap');\n</style>\n<!-- Loader -->\n<div *ngIf=load class=\"background\">\n    <div class=\"loader\">\n        <div class=\"loader-circle\">\n            <div class=\"loader-circle\">\n                <div class=\"loader-circle\">\n                    <div class=\"loader-circle\">\n                        <div class=\"loader-circle\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Loader -->\n<div class=\"container-fluid all\">\n    <div class=\"row\">\n        <div class=\"col-lg-4\"></div>\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n            <div class=\"box\">\n                <div class=\"head\">\n                    <h2><b>LogIn</b></h2>\n                </div>\n                <form (ngSubmit)=\"onLogin(f)\" #f=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label for=\"email\">E-Mail</label>\n                        <input \n                        placeholder = \"e.g.(abc@xyz.com)\"\n                        type=\"email\"\n                        id=\"email\" \n                        name=\"email\"\n                        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n                        ngModel\n                        class=\"form-control\" \n                        required\n                        #email=\"ngModel\">\n                        <span \n                        class=\"help-block\"\n                        *ngIf=\"!email.valid && email.touched\"\n                        style=\"color:red;\">Enter a valid Email</span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input \n                        placeholder = \"Minimum length 6 characters\"\n                        type=\"password\" \n                        id=\"password\" \n                        name=\"password\" \n                        ngModel \n                        class=\"form-control\" \n                        required\n                        [minlength]=\"6\"\n                        #password=\"ngModel\">\n                        <span\n                        class=\"help-block\"\n                        *ngIf=\"!password.valid && password.touched\"\n                        style=\"color:red;\">Enter minimum 6 character password</span>\n                    </div>\n                    <button type=\"submit\" class=\"btn mybutton\" [disabled]=\"!f.valid\">LogIn</button>\n                </form>\n                <p class=\"foot\">Don't have an account ? <a routerLink='/signup'>SignUp</a></p>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    @import url('https://fonts.googleapis.com/css?family=Lato|Montserrat&display=swap');\n</style>\n<div *ngIf=load class=\"background\">\n    <div class=\"loader\">\n        <div class=\"loader-circle\">\n            <div class=\"loader-circle\">\n                <div class=\"loader-circle\">\n                    <div class=\"loader-circle\">\n                        <div class=\"loader-circle\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid bg\">\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-md-12 col-sm-12\">\n            <div class=\"box\">\n            <div class=\"head\">\n                <h2><b>SignUp</b></h2>\n            </div>\n            <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input\n                    placeholder = \"Enter FullName\" \n                    type=\"name\" \n                    id=\"fullName\" \n                    name=\"fullName\" \n                    ngModel \n                    class=\"form-control\"\n                    required \n                    #fullName=\"ngModel\">\n                    <span \n                    class=\"help-block\"\n                    *ngIf=\"!fullName.valid && fullName.touched\"\n                    style=\"color:red;\">Enter a valid Name</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"username\">UserName</label>\n                    <input\n                    placeholder = \"e.g.(mike_26)\"\n                    type=\"userName\" \n                    id=\"userName\" \n                    name=\"userName\" \n                    ngModel \n                    class=\"form-control\"\n                    required \n                    #userName=\"ngModel\">\n                    <span \n                    class=\"help-block\"\n                    *ngIf=\"!userName.valid && userName.touched\"\n                    style=\"color:red;\">Enter a valid UserName</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">E-Mail</label>\n                    <input \n                    placeholder = \"e.g.(abc@xyz.com)\"\n                    type=\"email\" \n                    id=\"email\" \n                    name=\"email\"\n                    pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\n                    ngModel\n                    class=\"form-control\"\n                    required\n                    #email=\"ngModel\">\n                    <span \n                    class=\"help-block\"\n                    *ngIf=\"!email.valid && email.touched\"\n                    style=\"color:red;\">Enter valid E-mail</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input\n                    placeholder = \"Minimum length 6 characters\"\n                    type=\"password\" \n                    id=\"password\" \n                    name=\"password\" \n                    ngModel \n                    class=\"form-control\"\n                    required \n                    [minlength]=\"6\"\n                    #password=\"ngModel\">\n                    <span\n                    class=\"help-block\"\n                    *ngIf=\"!password.valid && password.touched\"\n                    style=\"color:red;\">Enter minimum 6 character password</span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"cpassword\">Confirm Password</label>\n                    <input\n                    placeholder = \"Confirm your Password\"\n                    appConfirmPassword=\"password\"\n                    type=\"password\" \n                    id=\"confirmPassword\" \n                    name=\"confirmPassword\" \n                    ngModel \n                    class=\"form-control\"\n                    required \n                    [minlength]=\"6\"\n                    #confirmPassword=\"ngModel\">\n                    <span\n                    class=\"help-block\"\n                    *ngIf=\"confirmPassword.touched && confirmPassword.errors?.required \"\n                    style=\"color:red;\">Confirm Password is required</span>\n                    <span\n                    class=\"help-block\"\n                    *ngIf=\"confirmPassword.touched && confirmPassword.errors?.notEqual &&\n                    !confirmPassword.errors?.required\" \n                    style=\"color:red;\">Password doesn't match</span>\n                </div>\n                <button type=\"submit\" class=\"btn mybutton\"  [disabled]=\"!f.valid\">SignUp</button>\n            </form>\n            <p class=\"foot\">Already on TaskR ? <a routerLink='/login'>LogIn</a></p>\n        </div>\n    </div>\n    <div class=\"col-lg-6\"></div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    @import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins|Raleway|Roboto&display=swap');\n</style>\n<!-- loader -->\n<div *ngIf=load class=\"background\">\n    <div class=\"loader\">\n        <div class=\"loader-circle\">\n            <div class=\"loader-circle\">\n                <div class=\"loader-circle\">\n                    <div class=\"loader-circle\">\n                        <div class=\"loader-circle\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- loader -->\n<!-- Update -->\n<div class=\"container-fluid all\">\n    <div class=\"row\">\n        <div class=\"col-lg-2 update-coloumn\">\n            <div class=\"update\">\n                <div *ngIf=!update>\n                    <form (ngSubmit)=\"updatedetailsboard(f)\" #f=\"ngForm\">\n                        <div class=\"form-group\">\n                            <label for=\"bName\">Board Name</label>\n                            <input \n                            placeholder = \"Enter Board Name\"\n                            type=\"text\"\n                            id=\"bName\" \n                            name=\"bName\"\n                            ngModel\n                            class=\"form-control\" \n                            required\n                            #bName=\"ngModel\">\n                            <span\n                            class=\"help-block\"\n                            *ngIf=\"!bName.valid && bName.touched\"\n                            style=\"color:red;\">Board Name cannot be empty</span>\n                            <label for=\"listname\">Description</label>\n                            <textarea\n                            placeholder = \"Enter Description Here\"\n                            rows=\"5\"\n                            id=\"description\" \n                            name=\"description\"\n                            ngModel\n                            class=\"form-control\"></textarea>\n                        </div>\n                        <div>\n                            <button type=\"submit\" class=\"btn btn-success update-card-button\" [disabled]=\"!f.valid\">Update Board</button>\n                        </div>\n                    </form>\n                    <!-- Bookmark -->\n                        <div *ngIf=!bookmark>\n                            <button class=\"bookmark\" (click)=\"addbookmark()\">\n                                <img src=\"assets/images/bookmark.png\" alt=\"bookmark\">\n                            </button>\n                        </div>\n                        <div *ngIf=bookmark>\n                            <button class=\"bookmark\" (click)=\"deletebookmark()\">\n                                <img src=\"assets/images/bookmarkadded.png\" alt=\"bookmarkadded\">\n                            </button>\n                        </div>\n                        <!-- Bookmark -->\n                        <div>\n                            <button (click)=\"showActivity()\" class=\"btn btn-success update-card-button\">Board Activity</button>\n                        </div>\n                </div>\n                <h6>Board Members</h6>\n                <div *ngFor=\"let memberName of boardMembers, index as id\">\n                    <div class=\"member-box\">{{memberName}}</div>\n                </div>\n                <form (ngSubmit)=\"addmember(fmember)\" #fmember=\"ngForm\">\n                    <div class=\"form-group\">\n                        <input \n                        placeholder = \"Username\"\n                        type=\"text\"\n                        id=\"name\"\n                        name=\"name\"\n                        ngModel\n                        class=\"form-control\"\n                        required \n                        #name=\"ngModel\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-success update-card-button\" [disabled]=\"!fmember.valid\">Add Member</button>\n                </form>\n            </div>\n        </div>\n        <!-- Update -->\n        <!-- Lists -->\n        <div class=\"col-lg-10\">\n            <div class=\"row\">\n            <div style=\"margin-bottom:1rem;\" *ngFor=\"let lists of lists, index as id\">\n                <div class=\"list-group-item box\">\n                    <div class=\"pull-left\">\n                        <h4\n                        class=\"list-group-item-heading listname\">\n                            {{lists.name}}\n                        </h4>\n                    </div>\n                    <div *ngFor=\"let cards of lists.cards, index as id\">\n                        <div *ngIf=\"cards.priority === 'High'\">\n                            <div class=\"list-group-item list-card\" \n                            (click)=expandcard(lists.id,cards.id,cards.name,cards.description,cards.priority,cards.dueDate,cards.dueTime,cards.reminderBefore)\n                            style=\"background-color:#FF5100;\">\n                                <div class=\"list-group-item-heading text-center\">\n                                    {{cards.name}}\n                                </div>\n                                <div *ngIf=\"cards.dueDateShow\">\n                                    <button class=\"due-button\">{{cards.dueDateShow}}</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"cards.priority === 'Medium'\">\n                            <div class=\"list-group-item list-card\" \n                            (click)=expandcard(lists.id,cards.id,cards.name,cards.description,cards.priority,cards.dueDate,cards.dueTime,cards.reminderBefore)\n                            style=\"background-color:#F3FF33;\">\n                                <div class=\"list-group-item-heading text-center\">\n                                    {{cards.name}}\n                                </div>\n                                <div *ngIf=\"cards.dueDateShow\">\n                                    <button class=\"due-button\">{{cards.dueDateShow}}</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"cards.priority === 'Low'\">\n                            <div class=\"list-group-item list-card\" \n                            (click)=expandcard(lists.id,cards.id,cards.name,cards.description,cards.priority,cards.dueDate,cards.dueTime,cards.reminderBefore)\n                            style=\"background-color:#33FF38;\">\n                                <div class=\"list-group-item-heading text-center\">\n                                    {{cards.name}}\n                                </div>\n                                <div *ngIf=\"cards.dueDateShow\">\n                                    <button class=\"due-button\">{{cards.dueDateShow}}</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"cards.priority === null\">\n                            <div class=\"list-group-item list-card\" (click)=expandcard(lists.id,cards.id,cards.name,cards.description,cards.priority,cards.dueDate,cards.dueTime,cards.reminderBefore)>\n                                <div class=\"list-group-item-heading text-center\">\n                                    {{cards.name}}\n                                </div>\n                                <div *ngIf=\"cards.dueDateShow\">\n                                    <button class=\"due-button\">{{cards.dueDateShow}}</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <button (click)=showinputcard(lists.id) class=\"mx-auto add-card\">Add Card</button>\n                </div>\n            </div>\n            <div class=\"list-group-item boxadd\">\n            <div *ngIf=!wantaddlist class=\"addlist\">\n                <button (click)=showinput() class=\"btn btn-primary add-list\">Add Another List</button>\n            </div>\n            <div *ngIf=wantaddlist>\n                <form (ngSubmit)=\"addlist(f)\" #f=\"ngForm\">\n                    <div class=\"form-group\">\n                        <input \n                        placeholder = \"Enter List Name\"\n                        type=\"text\"\n                        id=\"name\" \n                        name=\"name\"\n                        ngModel\n                        class=\"form-control\" \n                        required\n                        #name=\"ngModel\">\n                        <span \n                        class=\"help-block\"\n                        *ngIf=\"!name.valid && name.touched\"\n                        style=\"color:red;\">Enter a valid List Name</span>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-success mybutton\" [disabled]=\"!f.valid\">Add List</button>\n                    <button (click)=\"hideinput()\" class=\"btn btn-danger mybutton\"><span class=\"glyphicon glyphicon-remove\"></span> Remove</button>\n                </form>\n            </div>\n        </div>\n        </div>\n    </div>\n    </div>\n</div>\n<!-- Add Card -->\n<div *ngIf=wantaddcard class=\"add-card-background\">\n    <div class=\"contain-add-card\">\n        <form (ngSubmit)=\"addcard(f)\" #f=\"ngForm\" class=\"addcard\">\n            <div class=\"form-group\">\n                <input \n                placeholder = \"Enter Card Name\"\n                type=\"text\"\n                id=\"cname\"\n                name=\"cname\"\n                ngModel\n                class=\"form-control cardname\" \n                required\n                #cname=\"ngModel\">\n                <span \n                class=\"help-block\"\n                *ngIf=\"!cname.valid && cname.touched\"\n                style=\"color:red;\">Enter a valid Card Name</span>\n            </div>\n            <button type=\"submit\" class=\"mybutton\" [disabled]=\"!f.valid\">Add Card</button>\n            <button (click)=\"hidecardinput()\" class=\"mybuttoncancel\">Cancel</button>\n        </form> \n    </div>\n</div>\n<!-- Add Card -->\n<!-- Update Card Form -->\n<div *ngIf=updatecards class=\"add-card-background\">\n    <div class=\"contain-update-card\">\n        <form (ngSubmit)=\"updatecard(fcard)\" #fcard=\"ngForm\" class=\"addcard\">\n            <div class=\"form-group\">\n                <input \n                placeholder = \"Enter Card Name\"\n                type=\"text\"\n                id=\"cname\"\n                name=\"cname\"\n                ngModel\n                class=\"form-control input-field\"\n                required\n                #cname=\"ngModel\">\n                <span \n                class=\"help-block\"\n                *ngIf=\"!cname.valid && cname.touched\"\n                style=\"color:red;\">Enter a valid Card Name</span>\n                <label for=\"listname\">Description</label>\n                <textarea\n                placeholder = \"Enter Description Here\"\n                rows=\"5\"\n                id=\"description\"\n                name=\"description\"\n                ngModel\n                class=\"form-control input-field\"></textarea>\n                <label for=\"priority\">Task Priority</label>\n                <input \n                type=\"radio\"\n                name=\"priority\"\n                value=\"High\"\n                ngModel> High\n                <input \n                type=\"radio\"\n                name=\"priority\"\n                value=\"Medium\"\n                ngModel> Medium\n                <input \n                type=\"radio\"\n                name=\"priority\"\n                value=\"Low\"\n                ngModel> Low\n            </div>\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!fcard.valid\">Update Details</button>\n            <button (click)=\"deletecard()\" class=\"btn btn-danger\">\n                Delete Card\n            </button>\n        </form>\n        <form (ngSubmit)=\"cardduedate(fcardduedate)\" #fcardduedate=\"ngForm\" class=\"setduedate\">\n            <label for=\"duedate\">Set Due Date</label>   \n            <div class=\"form-group\">\n                <input \n                placeholder = \"Enter Card Name\"\n                type=\"date\"\n                id=\"dueDate\"\n                name=\"dueDate\"\n                ngModel\n                class=\"form-control input-field\"\n                required\n                #duedate=\"ngModel\">\n                <input \n                placeholder = \"Remind Before\"\n                type=\"time\"\n                id=\"dueTime\"\n                name=\"dueTime\"\n                ngModel\n                class=\"form-control input-field\"\n                required\n                #remindbefore=\"ngModel\">\n                <label for=\"priority\">Remind before</label>\n                <input \n                type=\"radio\"\n                name=\"reminderBefore\"\n                value=15\n                ngModel> 15 min\n                <input \n                type=\"radio\"\n                name=\"reminderBefore\"\n                value=30\n                ngModel> 30 min\n                <input \n                type=\"radio\"\n                name=\"reminderBefore\"\n                value=60\n                ngModel> 1 Hour\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!fcardduedate.valid\">Set Due Date</button>\n        </form>\n        <button class=\"update-card-button\" (click)=closecard()>Close</button>\n    </div>\n</div>\n<!-- Update Card Form -->\n<!-- Activity -->\n<div *ngIf=showactivity class=\"add-card-background\">\n    <div class=\"contain-notification-board\">\n        <h3 class=\"text-center text-uppercase\" style=\"color:#173E43;\">Activity</h3>\n        <div *ngFor=\"let activity of activity.reverse(), index as id\">\n           <p>\n               <div><b>{{ activity.activity }}</b></div>\n                <div class=\"time\">{{ activity.activityTime }}</div>\n        </div>\n        <button (click)=\"hideactivity()\" class=\"update-card-button\">Close</button>\n    </div>\n</div>\n<!-- Activity -->\n\n<!-- error -->\n<div *ngIf=error class=\"popup-background\">\n    <div class=\"contain-popup\">\n        <div class=\"row\">\n            <div class=\"col-md-5\">\n                <!-- <img src=\"assets/images/error.png\" class=\"img-fluid\" alt=\"error\"> -->\n            </div>\n            <div class=\"col-md-7\">\n                <h3 class=\"text-center err-heading\">Oops!!</h3>\n                <p class=\"errormsg\">{{errorMsg}}</p>\n                <button class=\"ok\" (click)=ok()>OK</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- error -->\n<!-- success -->\n<div *ngIf=success class=\"popup-background\">\n    <div class=\"contain-popup-success\">\n        <div class=\"row\">\n            <div class=\"col-md-5\">\n                <button class=\"ok-success\" (click)=ok()>OK</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- success -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    @import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins|Roboto&display=swap');\n</style>\n<footer class=\"fstyle\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-4\" style=\"margin-top:6rem;\"><img src=\"assets/images/footer2.svg\" alt=\"robot\"></div>\n            <div class=\"col-lg-4 text-center content\">\n                <h2 style=\"margin-top:6rem;\"><b>Start Planning Today</b></h2>\n                <h5 style=\"margin:2rem;\">\n                    Sign up and become one of the millions of people around the world using TaskR to get more done.\n                </h5>\n                <p><a routerLink=\"/signup\"><button *ngIf=\"!authservice.loggedIn()\" class=\"btn btn-success mybtn\">SignUp - It's free</button></a></p>\n            </div>\n            <div class=\"col-lg-4\"><img src=\"assets/images/footer.svg\" alt=\"robot\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-4\"></div>\n            <div class=\"col-lg-4\">\n                <h6 class=\"text-center\" style=\"color:black\"> © Copyright 2019. All rights reserved.</h6>\n            </div>\n            <div class=\"col-lg-4\"></div>\n        </div>\n    </div>\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    @import url('https://fonts.googleapis.com/css?family=Lato|Montserrat|Poppins|Roboto&display=swap');\n</style>\n<nav id=\"navigationbar\" class=\"navbar navbar-light sticky-top\">\n    <a routerLink='/' class=\"navbar-brand logo\" style=\"text-decoration:none; color:#3FB0AC\">\n        <!-- <img src=\"assets/images/logo.png\" alt=\"TaskR\" width=\"50px\" height=\"50px\" style=\"margin-right:10px;\"> -->\n        <h1><b><span style=\"color:#173E43\">Task</span>R</b></h1>\n    </a>\n    <div class=\"nav-item\">\n        <a routerLink='/login'><button *ngIf=\"!authservice.loggedIn()\" class=\"login mouseover\">LogIn</button></a>\n        <a routerLink='/signup'><button *ngIf=\"!authservice.loggedIn()\" class=\"login mouseover\">SignUp</button></a>\n        <a routerLink='/user'>\n            <button \n            *ngIf=\"authservice.loggedIn()\" \n            class=\"login mouseover\">My Boards</button>\n        </a>\n        <a routerLink='/'>\n            <button \n            *ngIf=\"authservice.loggedIn()\" \n            class=\"login mouseover\"\n            (click)=\"authservice.logout()\">Log Out</button>\n        </a>\n    </div>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    @import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins|Roboto&display=swap');\n</style>\n<section (scroll)=\"onWindowScroll($event);\">\n    <div class=\"container-fluid section1\">\n        <particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto text\">\n                <img src=\"assets/images/wheel.png\" class=\"rotate\" alt=\"wheel\">\n                <img src=\"assets/images/wheel2.png\" class=\"rotate\" alt=\"wheel\">\n                <h2>\n                    Task<span style=\"color:#3FB0AC;\">R</span>\n                    <span style=\"color:black;\"> lets you work more collaboratively and get more done.</span>\n                </h2>\n                <h3>\n                    TaskR's boards, lists, and cards enable you to organize and prioritize your projects in a fun,\n                    flexible, and rewarding way.\n                </h3>\n                <div class=\"box1\"></div>\n                <div class=\"box\"></div>\n            </div>\n            <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto vector\">\n                <img src=\"assets/images/homerobo.svg\" class=\"img-fluid\" alt=\"TaskR\">\n            </div>\n        </div>\n    </div>\n    <div class=\"section2\">\n        <div class=\"container\">\n            <h2>TaskR your way</h2>\n            <h4>\n                Use TaskR the way your team works best. We’ve got the flexibility & features to fit your style.\n            </h4>\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto\">\n                    <img src=\"assets/images/homesec2part1.svg\" class=\"img-fluid\" alt=\"team\">\n                    <h3 class=\"text-center\" style=\"color:black;\">Work Efficiently</h3>\n                    <h6 class=\"text-center\" style=\"color:black;\">\n                        Increase productivity and become highly efficient with your work\n                    </h6>\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto\">\n                    <img src=\"assets/images/homesec2part2.png\" class=\"img-fluid\" style=\"margin-bottom:3rem;\" alt=\"productive\">\n                    <h3 class=\"text-center\" style=\"color:black;\">A Productivity Platform</h3>\n                    <h6 class=\"text-center\" style=\"color:black;\">\n                        Provides a platform for better productivity and efficient work flow\n                    </h6>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section3\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-12 col-sm-12 mx-auto\">\n                    <div class=\"contentbox\">\n                        <h2 class=\"text-center\" style=\"color:#173E43;\"><b>What is Task Management ?</b></h2>\n                        <h6 style=\"margin-top:3rem;\">\n                            Task management is the process of managing a task through its life cycle. \n                            It involves planning, testing, tracking, and reporting. \n                            Task management can help either individual achieve goals, or groups of individuals collaborate and share knowledge \n                            for the accomplishment of collective goals. \n                            Tasks are also differentiated by complexity, from low to high.\n                        </h6>\n                        <h6 style=\"margin-top:3rem;\">\n                            Task management may form part of project management and process management and can serve as the foundation \n                            for efficient workflow in an organization. \n                            Project managers adhering to task-oriented management have a detailed and up-to-date project schedule, \n                            and are usually good at directing team members and moving the project forward.\n                        </h6>\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-md-12 col-sm-12 mx-auto\">\n                    <div class=\"work\"></div>\n                    <img src=\"assets/images/homesec3.svg\" class=\"img-fluid\" alt=\"work\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section4\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-12 col-sm-12 mx-auto\">\n                    <img src=\"assets/images/homesec4(full).svg\" class=\"img-fluid\" alt=\"info\">\n                </div>\n                <div class=\"col-lg-6 col-md-12 col-sm-12 mx-auto\">\n                    <div class=\"contentbox2\">\n                            <h2 class=\"text-center\" style=\"color:#173E43;\"><b>Information at a glance</b></h2>\n                            <h6 style=\"margin-top:3rem;\">\n                                Dive into the details by adding comments, attachments, due dates, \n                                and more directly to Trello cards. Collaborate on projects from beginning to end.\n                            </h6>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n    @import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins|Roboto&display=swap');\r\n</style>\r\n<!-- Loader -->\r\n<div *ngIf=load class=\"background\">\r\n    <div class=\"loader\">\r\n        <div class=\"loader-circle\">\r\n            <div class=\"loader-circle\">\r\n                <div class=\"loader-circle\">\r\n                    <div class=\"loader-circle\">\r\n                        <div class=\"loader-circle\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Loader -->\r\n<div class=\"container-fluid user\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-3 col-sm-12 user-name\">\r\n            <h2 style=\"color:#173E43\"><b>Welcome</b></h2>\r\n            <h2 style=\"color:#3FB0AC\"><b>{{name}}</b></h2>\r\n            <div>\r\n                <button (click)=\"showNotifications()\" class=\"add-card\">Notifications</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12 board\">\r\n            <div><h5><b>Boards</b></h5></div>\r\n            <div *ngFor=\"let boards of boards; index as id\">\r\n                <div *ngIf=!boards.bookmark>\r\n                <a \r\n                style=\"cursor : pointer;text-decoration:none;\"\r\n                [routerLink]=\"['/board',boardid[id]]\"\r\n                (click)=chkid(id)\r\n                routerLinkActive=\"active\"\r\n                class=\"list-group-item clearfix box\" style=\"margin-bottom:20px;\">\r\n                    <div class=\"pull-left box1\">\r\n                        <h4\r\n                        class=\"list-group-item-heading name\"\r\n                        style=\"color:#DDDFD4;\">{{boards.bName}}</h4>\r\n                    </div>\r\n                </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"list-group-item clearfix add\">\r\n                <div *ngIf=!wantaddboard class=\"name\">\r\n                    <button (click)=showinput() class=\"btn btn-primary\">Add Board</button>\r\n                </div>\r\n                <div *ngIf=wantaddboard>\r\n                    <form (ngSubmit)=\"addboard(f)\" #f=\"ngForm\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"boardname\">Board Name</label>\r\n                            <input \r\n                            placeholder = \"Enter Board Name\"\r\n                            type=\"text\"\r\n                            id=\"bName\" \r\n                            name=\"bName\"\r\n                            ngModel\r\n                            class=\"form-control\" \r\n                            required\r\n                            #bname=\"ngModel\">\r\n                            <span \r\n                            class=\"help-block\"\r\n                            *ngIf=\"!bname.valid && bname.touched\"\r\n                            style=\"color:red;\">Enter a valid Board Name</span>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-success mybutton\" [disabled]=\"!f.valid\">Add Board</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Favourites -->\r\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n            <div><h5><b>Favourites</b></h5></div>\r\n            <div *ngFor=\"let boards of boards; index as id\">\r\n                <div *ngIf=boards.bookmark>\r\n                <a \r\n                style=\"cursor : pointer;text-decoration:none;\"\r\n                [routerLink]=\"['/board',boardid[id]]\"\r\n                (click)=chkid(id)\r\n                routerLinkActive=\"active\"\r\n                class=\"list-group-item clearfix box\" style=\"margin-bottom:20px;\">\r\n                    <div class=\"pull-left box1\">\r\n                        <h4\r\n                        class=\"list-group-item-heading name\"\r\n                        style=\"color:#DDDFD4;\">{{boards.bName}}</h4>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        <!-- Favourites -->\r\n    </div>\r\n</div>\r\n<!-- Notifications -->\r\n<div *ngIf=shownotifications class=\"add-card-background\">\r\n    <div class=\"contain-activity-board\">\r\n        <div *ngFor=\"let notifications of notifications, index as id\">\r\n           <p>{{ notifications.notification }}</p>\r\n           <!-- <p>{{ notifications.activityTime }}</p> -->\r\n        </div>\r\n        <button (click)=\"hideNotifications()\" class=\"btn btn-primary hide\">Close</button>\r\n    </div>\r\n</div>\r\n<!-- Notifications -->\r\n<!-- error -->\r\n<div *ngIf=error class=\"popup-background\">\r\n        <div class=\"contain-popup\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <!-- <img src=\"assets/images/error.png\" class=\"img-fluid\" alt=\"error\"> -->\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <h3 class=\"text-center err-heading\">Oops!!</h3>\r\n                    <p class=\"errormsg\">{{errorMsg}}</p>\r\n                    <button class=\"ok\" (click)=ok()>OK</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- error -->\r\n    <!-- success -->\r\n    <div *ngIf=success class=\"popup-background\">\r\n        <div class=\"contain-popup-success\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <button class=\"ok-success\" (click)=ok()>OK</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- success -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- loader -->\n<div *ngIf=load class=\"background\">\n    <div class=\"loader\">\n        <div class=\"loader-circle\">\n            <div class=\"loader-circle\">\n                <div class=\"loader-circle\">\n                    <div class=\"loader-circle\">\n                        <div class=\"loader-circle\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- loader -->\n<!-- error -->\n<div *ngIf=error class=\"popup-background\">\n    <div class=\"contain-popup\">\n        <div class=\"row\">\n            <div class=\"col-md-5\">\n                <!-- <img src=\"assets/images/error.png\" class=\"img-fluid\" alt=\"error\"> -->\n            </div>\n            <div class=\"col-md-7\">\n                <h3 class=\"text-center err-heading\">Oops!!</h3>\n                <p class=\"errormsg\">{{errorMsg}}</p>\n                <button class=\"ok\" (click)=ok()>OK</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- error -->\n<div class=\"container\">\n    <div class=\"col-xs-12\">\n        <div class=\"row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4 box\">       \n            <h3 class=\"text-center\" style=\"color:#173E43;\"><b>Verify Your Credentials {{ name }}</b></h3>\n            <form (ngSubmit)=\"Verify(f)\" #f=\"ngForm\" class=\"myform\">\n                <div *ngIf=\"!resend\">\n                    <div class=\"form-group\">\n                        <label for=\"otp\">Enter OTP</label>\n                        <input\n                        type=\"text\" \n                        id=\"otp\" \n                        name=\"otp\"\n                        placeholder=\"OTP\"\n                        class=\"form-control\"\n                        ngModel\n                        required\n                        #verify=\"ngModel\">\n                        <span \n                        class=\"help-block\"\n                        *ngIf=\"!verify.valid && verify.touched\"\n                        style=\"color:red;\">Enter valid otp</span>\n                        <div\n                        class=\"help-block\"\n                        style=\"color:blue;\">OTP will expire in <span style=\"color:red;\">{{ minute }} : {{ seconds }}</span> minutes</div>\n                    </div>\n                    <button \n                    type=\"submit\" \n                    class=\"btn mybutton\"\n                    [disabled]=\"!f.valid\" style=\"margin-right : 10px;\">Verify\n                    </button>\n                </div>\n                <div *ngIf=\"resend\">\n                    <button\n                    (click)=\"onResend()\"  \n                    class=\"btn resend\"\n                    >Resend OTP</button>\n                </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
            /* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./verification/verification.component */ "./src/app/verification/verification.component.ts");
            /* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
            /* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
                { path: 'verify/:name', component: _verification_verification_component__WEBPACK_IMPORTED_MODULE_7__["VerificationComponent"] },
                { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
                { path: 'board/:id', component: _board_board_component__WEBPACK_IMPORTED_MODULE_9__["BoardComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authservice) {
                    this.authservice = authservice;
                    this.title = 'client';
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
            /* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./verification/verification.component */ "./src/app/verification/verification.component.ts");
            /* harmony import */ var _shared_confirm_password_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/confirm-password.directive */ "./src/app/shared/confirm-password.directive.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
            /* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
            /* harmony import */ var _user_boards_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/boards.service */ "./src/app/user/boards.service.ts");
            /* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                        _verification_verification_component__WEBPACK_IMPORTED_MODULE_13__["VerificationComponent"],
                        _shared_confirm_password_directive__WEBPACK_IMPORTED_MODULE_14__["ConfirmPasswordDirective"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                        _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"],
                        _board_board_component__WEBPACK_IMPORTED_MODULE_18__["BoardComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        angular_particle__WEBPACK_IMPORTED_MODULE_4__["ParticlesModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                        angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
                    ],
                    providers: [_user_boards_service__WEBPACK_IMPORTED_MODULE_17__["BoardsService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.css": 
        /*!************************************************!*\
          !*** ./src/app/auth/login/login.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched {\r\n    border : 2px solid red;\r\n}\r\ninput {\r\n    border-left: 3px solid #3FB0AC;\r\n    width:25rem;\r\n}\r\n/* Loader */\r\n.background {\r\n    position:absolute;\r\n    height:100vh;\r\n    width:100%;\r\n    background:rgba(0,0,0,0.5);\r\n    z-index:2;\r\n}\r\n.loader {\r\n    width:100px;\r\n    height:200px;\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%,-50%);\r\n    z-index:2;\r\n}\r\n.loader-circle {\r\n    width:calc(100% - 0.000001px);\r\n    height:calc(100% - 0.000001px);\r\n    border:8px solid #173E43;\r\n    border-top:8px solid #3FB0AC;\r\n    border-radius:50%;\r\n    -webkit-animation:rotate 5s linear infinite;\r\n            animation:rotate 5s linear infinite;\r\n}\r\n@-webkit-keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n@keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n/* Loader */\r\n.all {\r\n    background:url('login.svg');\r\n    background-size:100% auto;\r\n    background-repeat:no-repeat;\r\n    margin-bottom:10rem;\r\n}\r\n.box {\r\n    width:31rem;\r\n    margin-top:12rem;\r\n    border-radius: 10px;\r\n    border-bottom: 5px solid #173E43;\r\n    padding:10px 50px;\r\n}\r\n.head {\r\n    text-align : center;\r\n    color : #173E43;\r\n    margin-bottom:2rem;\r\n}\r\n.head h4{\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n.mybutton {\r\n    margin:1rem 10rem;\r\n    padding : 8px 25px;\r\n    border : 0px;\r\n    letter-spacing:0.8px;\r\n    background-image: linear-gradient(to right, #173E43 , #3FB0AC);\r\n    color : #FFFFFF;\r\n    border-radius : 2px;\r\n}\r\n.mybutton:hover {\r\n    box-shadow: 2px 2px 18px 5px rgba(0,0,0,0.1);\r\n    transition:0.2s;\r\n}\r\n.foot {\r\n    text-align:center;\r\n    padding : 10px;\r\n}\r\n.mybutton:focus {\r\n    outline:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsV0FBVztBQUNmO0FBQ0EsV0FBVztBQUNYO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLEtBQUssd0JBQXdCLENBQUM7QUFDbEM7QUFGQTtJQUNJLEtBQUssd0JBQXdCLENBQUM7QUFDbEM7QUFDQSxXQUFXO0FBQ1g7SUFDSSwyQkFBZ0Q7SUFDaEQseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiw4REFBOEQ7SUFDOUQsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjM0ZCMEFDO1xyXG4gICAgd2lkdGg6MjVyZW07XHJcbn1cclxuLyogTG9hZGVyICovXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgei1pbmRleDoyO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIHotaW5kZXg6MjtcclxufVxyXG4ubG9hZGVyLWNpcmNsZSB7XHJcbiAgICB3aWR0aDpjYWxjKDEwMCUgLSAwLjAwMDAwMXB4KTtcclxuICAgIGhlaWdodDpjYWxjKDEwMCUgLSAwLjAwMDAwMXB4KTtcclxuICAgIGJvcmRlcjo4cHggc29saWQgIzE3M0U0MztcclxuICAgIGJvcmRlci10b3A6OHB4IHNvbGlkICMzRkIwQUM7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGFuaW1hdGlvbjpyb3RhdGUgNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIDEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO31cclxufVxyXG4vKiBMb2FkZXIgKi9cclxuLmFsbCB7XHJcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHJlbTtcclxufVxyXG4uYm94IHtcclxuICAgIHdpZHRoOjMxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDoxMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzE3M0U0MztcclxuICAgIHBhZGRpbmc6MTBweCA1MHB4O1xyXG59XHJcbi5oZWFkIHtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBjb2xvciA6ICMxNzNFNDM7XHJcbiAgICBtYXJnaW4tYm90dG9tOjJyZW07XHJcbn1cclxuLmhlYWQgaDR7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5teWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46MXJlbSAxMHJlbTtcclxuICAgIHBhZGRpbmcgOiA4cHggMjVweDtcclxuICAgIGJvcmRlciA6IDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOjAuOHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTczRTQzICwgIzNGQjBBQyk7XHJcbiAgICBjb2xvciA6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMnB4O1xyXG59XHJcbi5teWJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDE4cHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIHRyYW5zaXRpb246MC4ycztcclxufVxyXG4uZm9vdCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmcgOiAxMHB4O1xyXG59XHJcbi5teWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/auth/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/server.service */ "./src/app/services/server.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(serverservice, router) {
                    this.serverservice = serverservice;
                    this.router = router;
                    this.load = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.load = false;
                    this.router.events.subscribe(function (evt) {
                        if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                            return;
                        }
                        window.scrollTo(0, 0);
                    });
                };
                LoginComponent.prototype.onLogin = function (form) {
                    var _this = this;
                    this.load = true;
                    console.log(JSON.stringify(form.value));
                    var value = form.value;
                    this.serverservice.logInUser(value.email, value.password)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.tk = response;
                        // this.name = response;
                        // console.log(this.name.name);
                        if (_this.tk.message != "Please verify your email address to login.") {
                            localStorage.setItem('token', _this.tk.token);
                            localStorage.setItem('name', _this.tk.userName);
                            _this.router.navigate(['/user']);
                        }
                        if (_this.tk.message === "Please verify your email address to login.") {
                            _this.router.navigate(['/verify', _this.tk.userName]);
                        }
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.errormsg = error.error.message;
                        if (_this.errormsg === "Please verify your email address to login.") {
                            _this.uid = error.error;
                            // console.log(this.uid.userName);
                            _this.router.navigate(['/verify', _this.uid.userName]);
                            _this.load = false;
                        }
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/auth/signup/signup.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched {\r\n    border : 2px solid red;\r\n}\r\ninput {\r\n    border-left: 5px solid #173E43;\r\n    width:25rem;\r\n}\r\n/* Loader */\r\n.background {\r\n    position:absolute;\r\n    height:100vh;\r\n    width:100%;\r\n    background:rgba(0,0,0,0.5);\r\n    z-index:2;\r\n}\r\n.loader {\r\n    width:100px;\r\n    height:200px;\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%,-50%);\r\n    z-index:2;\r\n}\r\n.loader-circle {\r\n    width:calc(100% - 0.000001px);\r\n    height:calc(100% - 0.000001px);\r\n    border:8px solid #173E43;\r\n    border-top:8px solid #3FB0AC;\r\n    border-radius:50%;\r\n    -webkit-animation:rotate 5s linear infinite;\r\n            animation:rotate 5s linear infinite;\r\n}\r\n@-webkit-keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n@keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n/* Loader */\r\n.bg {\r\n    background:url('signup2.png');\r\n    background-size:100% auto;\r\n    background-position:center center;\r\n    background-repeat:no-repeat;\r\n    padding-bottom:2rem;\r\n}\r\n.head {\r\n    text-align : center;\r\n    color : #173E43;\r\n    margin:15px;\r\n    margin-bottom:3rem;\r\n}\r\n.head h4 {\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n.mybutton {\r\n    margin-left : 9em;\r\n    padding : 6px 20px;\r\n    border : 2px solid black;\r\n    background-color : transparent;\r\n    color : black;\r\n    border-radius : 10px;\r\n}\r\n.mybutton:hover {\r\n    background-color : black;\r\n    color : white;\r\n    border : 2px solid black;\r\n    transition:all 0.2s ease-in-out; \r\n}\r\n.foot {\r\n    text-align:center;\r\n    padding : 10px;\r\n}\r\n.box {\r\n    margin-top:4rem;\r\n    margin-left:4rem;\r\n    width:30rem;\r\n    font-family: 'Montserrat', sans-serif;\r\n    padding:15px 40px;\r\n    /* box-shadow: 2px 2px 18px 5px rgba(0,0,0,0.1); */\r\n}\r\n.mybutton:focus {\r\n    outline:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsUUFBUTtJQUNSLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsMkNBQW1DO1lBQW5DLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsQ0FBQztBQUNsQztBQUZBO0lBQ0ksS0FBSyx3QkFBd0IsQ0FBQztBQUNsQztBQUNBLFdBQVc7QUFDWDtJQUNJLDZCQUFrRDtJQUNsRCx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixrREFBa0Q7QUFDdEQ7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXIgOiAycHggc29saWQgcmVkO1xyXG59XHJcbmlucHV0IHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzE3M0U0MztcclxuICAgIHdpZHRoOjI1cmVtO1xyXG59XHJcbi8qIExvYWRlciAqL1xyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KTtcclxuICAgIHotaW5kZXg6MjtcclxufVxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB6LWluZGV4OjI7XHJcbn1cclxuLmxvYWRlci1jaXJjbGUge1xyXG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gMC4wMDAwMDFweCk7XHJcbiAgICBoZWlnaHQ6Y2FsYygxMDAlIC0gMC4wMDAwMDFweCk7XHJcbiAgICBib3JkZXI6OHB4IHNvbGlkICMxNzNFNDM7XHJcbiAgICBib3JkZXItdG9wOjhweCBzb2xpZCAjM0ZCMEFDO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBhbmltYXRpb246cm90YXRlIDVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt9XHJcbn1cclxuLyogTG9hZGVyICovXHJcbi5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NpZ251cDIucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToycmVtO1xyXG59XHJcbi5oZWFkIHtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICBjb2xvciA6ICMxNzNFNDM7XHJcbiAgICBtYXJnaW46MTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206M3JlbTtcclxufVxyXG4uaGVhZCBoNCB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5teWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDllbTtcclxuICAgIHBhZGRpbmcgOiA2cHggMjBweDtcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3IgOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yIDogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTBweDtcclxufVxyXG4ubXlidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6IGJsYWNrO1xyXG4gICAgY29sb3IgOiB3aGl0ZTtcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHRyYW5zaXRpb246YWxsIDAuMnMgZWFzZS1pbi1vdXQ7IFxyXG59XHJcbi5mb290IHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgcGFkZGluZyA6IDEwcHg7XHJcbn1cclxuLmJveCB7XHJcbiAgICBtYXJnaW4tdG9wOjRyZW07XHJcbiAgICBtYXJnaW4tbGVmdDo0cmVtO1xyXG4gICAgd2lkdGg6MzByZW07XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzoxNXB4IDQwcHg7XHJcbiAgICAvKiBib3gtc2hhZG93OiAycHggMnB4IDE4cHggNXB4IHJnYmEoMCwwLDAsMC4xKTsgKi9cclxufVxyXG4ubXlidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/auth/signup/signup.component.ts ***!
          \*************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/server.service */ "./src/app/services/server.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(serverservice, router) {
                    this.serverservice = serverservice;
                    this.router = router;
                    this.load = false;
                }
                SignupComponent.prototype.ngOnInit = function () {
                    this.load = false;
                    this.router.events.subscribe(function (evt) {
                        if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                            return;
                        }
                        window.scrollTo(0, 0);
                    });
                };
                SignupComponent.prototype.onSignup = function (form) {
                    var _this = this;
                    this.load = true;
                    console.log(JSON.stringify(form.value));
                    var value = form.value;
                    this.serverservice.signUpUser(value.fullName, value.userName, value.email, value.password, value.confirmPassword)
                        .subscribe(function (response) {
                        _this.uname = response;
                        console.log(response);
                        console.log(_this.uname.userName);
                        _this.router.navigate(['/verify', _this.uname.userName]);
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                    });
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: src_app_services_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/board/board.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/board/board.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched {\r\n    border : 2px solid red;\r\n}\r\n/* Loader */\r\n.background {\r\n    position:absolute;\r\n    height:87.5vh;\r\n    width:100%;\r\n    background:rgba(0,0,0,0.5);\r\n    z-index:2;\r\n}\r\n.loader {\r\n    width:100px;\r\n    height:200px;\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%,-50%);\r\n    z-index:2;\r\n}\r\n.loader-circle {\r\n    width:calc(100% - 0.000001px);\r\n    height:calc(100% - 0.000001px);\r\n    border:8px solid #173E43;\r\n    border-top:8px solid #3FB0AC;\r\n    border-radius:50%;\r\n    -webkit-animation:rotate 5s linear infinite;\r\n            animation:rotate 5s linear infinite;\r\n}\r\n@-webkit-keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n@keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n/* Loader */\r\n/* Scrollbar */\r\n/* width */\r\n.all::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n/* Track */\r\n.all::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey; \r\n    border-radius: 2px;\r\n}\r\n/* Handle */\r\n.all::-webkit-scrollbar-thumb {\r\n    background: #696969; \r\n    border-radius: 2px;\r\n}\r\n/* Handle on hover */\r\n.all::-webkit-scrollbar-thumb:hover {\r\n    background: #000000; \r\n}\r\n/* Scrollbar */\r\n/* width */\r\n.update::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n/* Track */\r\n.update::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey; \r\n    border-radius: 2px;\r\n}\r\n/* Handle */\r\n.update::-webkit-scrollbar-thumb {\r\n    background: #696969; \r\n    border-radius: 2px;\r\n}\r\n/* Handle on hover */\r\n.update::-webkit-scrollbar-thumb:hover {\r\n    background: #000000; \r\n}\r\n/* Scrollbar */\r\n/* width */\r\n.contain-notification-board::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n/* Track */\r\n.contain-notification-board::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey; \r\n    border-radius: 2px;\r\n}\r\n/* Handle */\r\n.contain-notification-board::-webkit-scrollbar-thumb {\r\n    background: #696969; \r\n    border-radius: 2px;\r\n}\r\n/* Handle on hover */\r\n.contain-notification-board::-webkit-scrollbar-thumb:hover {\r\n    background: #000000; \r\n}\r\n/* Scrollbar */\r\n/* width */\r\n.contain-update-card::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n/* Track */\r\n.contain-update-card::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey; \r\n    border-radius: 2px;\r\n}\r\n/* Handle */\r\n.contain-update-card::-webkit-scrollbar-thumb {\r\n    background: #696969; \r\n    border-radius: 2px;\r\n}\r\n/* Handle on hover */\r\n.contain-update-card::-webkit-scrollbar-thumb:hover {\r\n    background: #000000; \r\n}\r\n/* Scrollbar */\r\n.all {\r\n    height:87.5vh;\r\n    overflow:auto;\r\n    background:url('boardbg.png');\r\n    background-size:cover;\r\n}\r\n.box {\r\n    background-color:#DDDFD4;\r\n    margin-bottom:1rem;\r\n    width:15rem;\r\n    margin:1rem;\r\n    border:0px;\r\n    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);\r\n}\r\n.box:hover {\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.4s ease-in-out;\r\n}\r\n.boxadd {\r\n    background-color:#DDDFD4;\r\n    margin-bottom:1rem;\r\n    height:8rem;\r\n    border-radius:5px;\r\n    width:15rem;\r\n    margin:1rem;\r\n    border:0px;\r\n    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);\r\n}\r\n.box:hover {\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.4s ease-in-out;\r\n}\r\n.listname {\r\n    color:#000000;\r\n    font-family: 'Raleway', sans-serif;\r\n}\r\n.update-coloumn {\r\n    padding:0px 0px ;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n.update {\r\n    position:fixed;\r\n    top:20;\r\n    overflow:auto;\r\n    height:87.5vh;\r\n    width:13rem;\r\n    padding:15px 25px;\r\n    background-color:rgba(23, 62, 67, 0.5);\r\n}\r\n.update-card-button {\r\n    background:linear-gradient(40deg,#45cafc,#303f9f)!important;\r\n    border-radius:10em;\r\n    border:0px;\r\n    margin:10px 0rem;\r\n    padding:10px 30px;\r\n    color:#FFFFFF;\r\n    box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.2);\r\n}\r\n.update-card-button:focus {\r\n    outline:none;\r\n}\r\n.bookmark {\r\n    border: 0px;\r\n    background-color:transparent;\r\n    margin-left:3rem;\r\n    padding:18px;\r\n}\r\n.bookmark:focus {\r\n    outline:none;\r\n}\r\n.member-box {\r\n    background-color:#FFFFFF;\r\n    text-align:center;\r\n    border-radius:5px;\r\n    margin:10px 0px;\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    cursor:pointer;\r\n}\r\n.member-box:hover {\r\n    background-color:#F7F7F7;\r\n    transition:0.2s;\r\n}\r\n.contain-add-card {\r\n    position:relative;\r\n    top:20%;\r\n    left:35%;\r\n    background:url('addcard.png');\r\n    background-size:cover;\r\n    height:20rem;\r\n    width:28rem;\r\n    padding:2rem 5rem;\r\n    border-radius:5px;\r\n    -webkit-animation:appearcard 1s 1;\r\n            animation:appearcard 1s 1;\r\n}\r\n@-webkit-keyframes appearcard {\r\n    from{\r\n        transform:scale(0);\r\n        left:-45%;\r\n    }\r\n    to{\r\n        transform:scale(1);\r\n        left:35%;\r\n    };\r\n}\r\n@keyframes appearcard {\r\n    from{\r\n        transform:scale(0);\r\n        left:-45%;\r\n    }\r\n    to{\r\n        transform:scale(1);\r\n        left:35%;\r\n    };\r\n}\r\n.cardname {\r\n    border-left:5px solid #173E43 !important;\r\n}\r\n.add-card-background {\r\n    position:absolute;\r\n    top:5rem;\r\n    width:100%;\r\n    height:87.5vh;\r\n    background-color:rgba(0,0,0,0.8);\r\n}\r\n.contain-update-card {\r\n    position:relative;\r\n    left:40%;\r\n    top:8%;\r\n    overflow:auto;\r\n    background-color:#3B3532;\r\n    background-size:cover;\r\n    color:#FFFFFF;\r\n    height:30rem;\r\n    width:25rem;\r\n    padding:2rem 2rem;\r\n    border-radius:5px;\r\n    -webkit-animation:appear 0.5s 1;\r\n            animation:appear 0.5s 1;\r\n}\r\n.contain-activity-board {\r\n    position:relative;\r\n    left:40%;\r\n    background:url('update-card.jpg');\r\n    background-size:cover;\r\n    color:#FFFFFF;\r\n    overflow:auto;\r\n    height:80vh;\r\n    width:30rem;\r\n    padding:2rem 2rem;\r\n    border-radius:5px;\r\n}\r\n.contain-notification-board {\r\n    position:relative;\r\n    left:40%;\r\n    top:8%;\r\n    background-color:#FFFFFF;\r\n    background-size:cover;\r\n    font-family: 'Montserrat', sans-serif;\r\n    color:#000000;\r\n    overflow:auto;\r\n    height:30rem;\r\n    width:30rem;\r\n    padding:2rem 2rem;\r\n    border-radius:5px;\r\n    -webkit-animation: appear 0.5s 1;\r\n            animation: appear 0.5s 1;\r\n}\r\n.time {\r\n    font-size:12px;\r\n}\r\n.list-card {\r\n    box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.2);\r\n    margin-bottom:1rem;\r\n    font-family: 'Poppins', sans-serif;\r\n    cursor:pointer;\r\n    border:0px;\r\n}\r\n.list-card:hover {\r\n    background-color:#F8F8F8;\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.2s ease-in-out;\r\n}\r\n.add-card {\r\n    background:linear-gradient(40deg,#45cafc,#303f9f)!important;\r\n    border-radius:10em;\r\n    border:0px;\r\n    padding:10px 30px;\r\n    color:#FFFFFF;\r\n    box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.2);\r\n}\r\n.add-card:focus {\r\n    outline:none;\r\n}\r\n.add-card:hover {\r\n    transform:translateX(0.5rem);\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.5s ease-in-out;\r\n}\r\n.mybutton {\r\n    background:linear-gradient(40deg,#697CE0,#7681EF);\r\n    border:0px;\r\n    color:#FFFFFF;\r\n    border-top-left-radius: 20px;\r\n    border-bottom-left-radius: 20px;\r\n    padding:8px 16px;\r\n    margin-left:40px;\r\n    box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.2);\r\n}\r\n.mybutton:hover {\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.3s ease-in-out;\r\n}\r\n.mybuttoncancel:hover {\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.3s ease-in-out;\r\n}\r\n.mybuttoncancel {\r\n    background:linear-gradient(40deg,#F31713,#F74B4E);\r\n    border:0px;\r\n    color:#FFFFFF;\r\n    border-top-right-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    padding:8px 16px;\r\n    margin-left:10px;\r\n    box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.2);\r\n}\r\n.add-list {\r\n    border:0px;\r\n    background-color: rgba(0,0,0,.08);\r\n    color:#4B4B4B;\r\n    margin-top:15px;\r\n    padding:25px 40px;\r\n    box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.2);\r\n}\r\n.add-list:hover {\r\n    background-color:#ECECEC;\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.5s ease-in-out;\r\n}\r\n.input-field {\r\n    margin-bottom : 1rem;\r\n}\r\n.setduedate {\r\n    margin-top:1rem;\r\n}\r\n.due-button {\r\n    border:0;\r\n    background-color:#3FB0AC;\r\n    font-size:12px;\r\n    color:#FFFFFF;\r\n    border-radius:5px;\r\n    padding:5px;\r\n    margin-left:15px;\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n}\r\n/* Popup */\r\n.popup-background {\r\n    position:absolute;\r\n    top:5rem;\r\n    width:100%;\r\n    height:87.5vh;\r\n    background-color:rgba(0,0,0,0.7);\r\n}\r\n/* error */\r\n.contain-popup {\r\n    position:relative;\r\n    top:25%;\r\n    left:35%;\r\n    background:url('error.png');\r\n    background-size:cover;\r\n    color:#FFFFFF;\r\n    overflow:auto;\r\n    height:17rem;\r\n    width:25rem;\r\n    padding:2rem 2rem;\r\n    border-radius:5px;\r\n    -webkit-animation: appear 0.5s 1;\r\n            animation: appear 0.5s 1;\r\n}\r\n.err-heading {\r\n    color:#173E43;\r\n}\r\n.errormsg {\r\n    color:#173E43;\r\n    text-align:center;\r\n    margin-top:2rem;\r\n}\r\n.ok {\r\n    border:0;\r\n    padding:5px 15px;\r\n    background-color:#173E43;\r\n    border-radius:2px;\r\n    margin-top:2rem;\r\n    margin-left:4rem;\r\n    color:#FFFFFF;\r\n    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);\r\n}\r\n.ok:hover {\r\n    background-color:#29747D;\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.3s ease-in-out;\r\n}\r\n@-webkit-keyframes appear {\r\n    from{transform:scale(0);}\r\n    to{transform:scale(1);};\r\n}\r\n@keyframes appear {\r\n    from{transform:scale(0);}\r\n    to{transform:scale(1);};\r\n}\r\n/* error */\r\n/* success */\r\n.contain-popup-success {\r\n    position:relative;\r\n    top:25%;\r\n    left:35%;\r\n    background:url('success.png');\r\n    background-size:cover;\r\n    color:#FFFFFF;\r\n    overflow:auto;\r\n    height:17rem;\r\n    width:25rem;\r\n    padding:2rem 2rem;\r\n    border-radius:5px;\r\n    -webkit-animation: appear 0.5s 1;\r\n            animation: appear 0.5s 1;\r\n}\r\n.ok-success {\r\n    border:0;\r\n    padding:0px 15px;\r\n    background-color:#173E43;\r\n    border-radius:2px;\r\n    margin-top:11rem;\r\n    margin-left:9rem;\r\n    color:#FFFFFF;\r\n    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);\r\n}\r\n.ok-success:hover {\r\n    background-color:#29747D;\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.3s ease-in-out;\r\n}\r\n/* success */\r\n/* Popup */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBLFdBQVc7QUFDWDtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxLQUFLLHdCQUF3QixDQUFDO0FBQ2xDO0FBRkE7SUFDSSxLQUFLLHdCQUF3QixDQUFDO0FBQ2xDO0FBQ0EsV0FBVztBQUNYLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7SUFDSSxVQUFVO0FBQ2Q7QUFFQSxVQUFVO0FBQ1Y7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBRUEsV0FBVztBQUNYO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7SUFDSSxVQUFVO0FBQ2Q7QUFFQSxVQUFVO0FBQ1Y7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBRUEsV0FBVztBQUNYO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7SUFDSSxVQUFVO0FBQ2Q7QUFFQSxVQUFVO0FBQ1Y7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBRUEsV0FBVztBQUNYO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7SUFDSSxVQUFVO0FBQ2Q7QUFFQSxVQUFVO0FBQ1Y7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBRUEsV0FBVztBQUNYO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQStDO0lBQy9DLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDVix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLG9FQUFvRTtJQUNwRSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDVix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLG9FQUFvRTtJQUNwRSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGNBQWM7SUFDZCxNQUFNO0lBQ04sYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksMkRBQTJEO0lBQzNELGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0VBQW9FO0lBQ3BFLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUiw2QkFBK0M7SUFDL0MscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO0lBQ1osQ0FBQTtBQUNKO0FBVEE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO0lBQ1osQ0FBQTtBQUNKO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsTUFBTTtJQUNOLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsK0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixpQ0FBbUQ7SUFDbkQscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLE1BQU07SUFDTix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsb0VBQW9FO0lBQ3BFLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksMkRBQTJEO0lBQzNELGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixvRUFBb0U7SUFDcEUsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxpREFBaUQ7SUFDakQsVUFBVTtJQUNWLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxvRUFBb0U7SUFDcEUsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxvRUFBb0U7SUFDcEUsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxpREFBaUQ7SUFDakQsVUFBVTtJQUNWLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9FQUFvRTtJQUNwRSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9FQUFvRTtBQUN4RTtBQUNBLFVBQVU7QUFDVjtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7QUFDQSxVQUFVO0FBQ1Y7SUFDSSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUiwyQkFBNkM7SUFDN0MscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdDQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9FQUFvRTtJQUNwRSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLEtBQUssa0JBQWtCLENBQUM7SUFDeEIsR0FBRyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzFCO0FBSEE7SUFDSSxLQUFLLGtCQUFrQixDQUFDO0lBQ3hCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQTtBQUMxQjtBQUNBLFVBQVU7QUFDVixZQUFZO0FBQ1o7SUFDSSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUiw2QkFBK0M7SUFDL0MscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdDQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixvRUFBb0U7SUFDcEUsK0JBQStCO0FBQ25DO0FBQ0EsWUFBWTtBQUNaLFVBQVUiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuLyogTG9hZGVyICovXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0Ojg3LjV2aDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KTtcclxuICAgIHotaW5kZXg6MjtcclxufVxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB6LWluZGV4OjI7XHJcbn1cclxuLmxvYWRlci1jaXJjbGUge1xyXG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gMC4wMDAwMDFweCk7XHJcbiAgICBoZWlnaHQ6Y2FsYygxMDAlIC0gMC4wMDAwMDFweCk7XHJcbiAgICBib3JkZXI6OHB4IHNvbGlkICMxNzNFNDM7XHJcbiAgICBib3JkZXItdG9wOjhweCBzb2xpZCAjM0ZCMEFDO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBhbmltYXRpb246cm90YXRlIDVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt9XHJcbn1cclxuLyogTG9hZGVyICovXHJcbi8qIFNjcm9sbGJhciAqL1xyXG4vKiB3aWR0aCAqL1xyXG4uYWxsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG4uYWxsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLmFsbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzY5Njk2OTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4uYWxsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOyBcclxufVxyXG4vKiBTY3JvbGxiYXIgKi9cclxuLyogd2lkdGggKi9cclxuLnVwZGF0ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuLnVwZGF0ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbi51cGRhdGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM2OTY5Njk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuLnVwZGF0ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDsgXHJcbn1cclxuLyogU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbi5jb250YWluLW5vdGlmaWNhdGlvbi1ib2FyZDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuLmNvbnRhaW4tbm90aWZpY2F0aW9uLWJvYXJkOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuLmNvbnRhaW4tbm90aWZpY2F0aW9uLWJvYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjk2OTY5OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbi5jb250YWluLW5vdGlmaWNhdGlvbi1ib2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDsgXHJcbn1cclxuLyogU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbi5jb250YWluLXVwZGF0ZS1jYXJkOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG4uY29udGFpbi11cGRhdGUtY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbi5jb250YWluLXVwZGF0ZS1jYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjk2OTY5OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbi5jb250YWluLXVwZGF0ZS1jYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOyBcclxufVxyXG4vKiBTY3JvbGxiYXIgKi9cclxuLmFsbCB7XHJcbiAgICBoZWlnaHQ6ODcuNXZoO1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9hcmRiZy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG59XHJcbi5ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRERERkQ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxcmVtO1xyXG4gICAgd2lkdGg6MTVyZW07XHJcbiAgICBtYXJnaW46MXJlbTtcclxuICAgIGJvcmRlcjowcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLDAsMCwuMTUpO1xyXG59XHJcbi5ib3g6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5ib3hhZGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRERERkQ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxcmVtO1xyXG4gICAgaGVpZ2h0OjhyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIHdpZHRoOjE1cmVtO1xyXG4gICAgbWFyZ2luOjFyZW07XHJcbiAgICBib3JkZXI6MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwwLDAsLjE1KTtcclxufVxyXG4uYm94OmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC40cyBlYXNlLWluLW91dDtcclxufVxyXG4ubGlzdG5hbWUge1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnVwZGF0ZS1jb2xvdW1uIHtcclxuICAgIHBhZGRpbmc6MHB4IDBweCA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi51cGRhdGUge1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB0b3A6MjA7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgaGVpZ2h0Ojg3LjV2aDtcclxuICAgIHdpZHRoOjEzcmVtO1xyXG4gICAgcGFkZGluZzoxNXB4IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjMsIDYyLCA2NywgMC41KTtcclxufVxyXG4udXBkYXRlLWNhcmQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQwZGVnLCM0NWNhZmMsIzMwM2Y5ZikhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMGVtO1xyXG4gICAgYm9yZGVyOjBweDtcclxuICAgIG1hcmdpbjoxMHB4IDByZW07XHJcbiAgICBwYWRkaW5nOjEwcHggMzBweDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDE4cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG4udXBkYXRlLWNhcmQtYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG4uYm9va21hcmsge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6M3JlbTtcclxuICAgIHBhZGRpbmc6MThweDtcclxufVxyXG4uYm9va21hcms6Zm9jdXMge1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcbi5tZW1iZXItYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBtYXJnaW46MTBweCAwcHg7XHJcbiAgICBib3gtc2hhZG93OjAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5tZW1iZXItYm94OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0Y3RjdGNztcclxuICAgIHRyYW5zaXRpb246MC4ycztcclxufVxyXG4uY29udGFpbi1hZGQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDoyMCU7XHJcbiAgICBsZWZ0OjM1JTtcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWRkY2FyZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgaGVpZ2h0OjIwcmVtO1xyXG4gICAgd2lkdGg6MjhyZW07XHJcbiAgICBwYWRkaW5nOjJyZW0gNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgYW5pbWF0aW9uOmFwcGVhcmNhcmQgMXMgMTtcclxufVxyXG5Aa2V5ZnJhbWVzIGFwcGVhcmNhcmQge1xyXG4gICAgZnJvbXtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCk7XHJcbiAgICAgICAgbGVmdDotNDUlO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xyXG4gICAgICAgIGxlZnQ6MzUlO1xyXG4gICAgfTtcclxufVxyXG4uY2FyZG5hbWUge1xyXG4gICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkICMxNzNFNDMgIWltcG9ydGFudDtcclxufVxyXG4uYWRkLWNhcmQtYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1cmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo4Ny41dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC44KTtcclxufVxyXG4uY29udGFpbi11cGRhdGUtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGxlZnQ6NDAlO1xyXG4gICAgdG9wOjglO1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNCMzUzMjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICBoZWlnaHQ6MzByZW07XHJcbiAgICB3aWR0aDoyNXJlbTtcclxuICAgIHBhZGRpbmc6MnJlbSAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBhbmltYXRpb246YXBwZWFyIDAuNXMgMTtcclxufVxyXG4uY29udGFpbi1hY3Rpdml0eS1ib2FyZCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGxlZnQ6NDAlO1xyXG4gICAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy91cGRhdGUtY2FyZC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgY29sb3I6I0ZGRkZGRjtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBoZWlnaHQ6ODB2aDtcclxuICAgIHdpZHRoOjMwcmVtO1xyXG4gICAgcGFkZGluZzoycmVtIDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4uY29udGFpbi1ub3RpZmljYXRpb24tYm9hcmQge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBsZWZ0OjQwJTtcclxuICAgIHRvcDo4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIGhlaWdodDozMHJlbTtcclxuICAgIHdpZHRoOjMwcmVtO1xyXG4gICAgcGFkZGluZzoycmVtIDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIGFuaW1hdGlvbjogYXBwZWFyIDAuNXMgMTtcclxufVxyXG4udGltZSB7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxufVxyXG4ubGlzdC1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMThweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgYm9yZGVyOjBweDtcclxufVxyXG4ubGlzdC1jYXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0Y4RjhGODtcclxuICAgIGJveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG4uYWRkLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDBkZWcsIzQ1Y2FmYywjMzAzZjlmKSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwZW07XHJcbiAgICBib3JkZXI6MHB4O1xyXG4gICAgcGFkZGluZzoxMHB4IDMwcHg7XHJcbiAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxOHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLmFkZC1jYXJkOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG4uYWRkLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMC41cmVtKTtcclxuICAgIGJveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4ubXlidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDBkZWcsIzY5N0NFMCwjNzY4MUVGKTtcclxuICAgIGJvcmRlcjowcHg7XHJcbiAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOjhweCAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMThweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcbi5teWJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OjAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIHRyYW5zaXRpb246YWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm15YnV0dG9uY2FuY2VsOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4ubXlidXR0b25jYW5jZWwge1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDBkZWcsI0YzMTcxMywjRjc0QjRFKTtcclxuICAgIGJvcmRlcjowcHg7XHJcbiAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6OHB4IDE2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxOHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLmFkZC1saXN0IHtcclxuICAgIGJvcmRlcjowcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wOCk7XHJcbiAgICBjb2xvcjojNEI0QjRCO1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgcGFkZGluZzoyNXB4IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDE4cHggMnB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG4uYWRkLWxpc3Q6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRUNFQ0VDO1xyXG4gICAgYm94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tIDogMXJlbTtcclxufVxyXG4uc2V0ZHVlZGF0ZSB7XHJcbiAgICBtYXJnaW4tdG9wOjFyZW07XHJcbn1cclxuLmR1ZS1idXR0b24ge1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzRkIwQUM7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIGJveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcbi8qIFBvcHVwICovXHJcbi5wb3B1cC1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjVyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0Ojg3LjV2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjcpO1xyXG59XHJcbi8qIGVycm9yICovXHJcbi5jb250YWluLXBvcHVwIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjI1JTtcclxuICAgIGxlZnQ6MzUlO1xyXG4gICAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9lcnJvci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgY29sb3I6I0ZGRkZGRjtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBoZWlnaHQ6MTdyZW07XHJcbiAgICB3aWR0aDoyNXJlbTtcclxuICAgIHBhZGRpbmc6MnJlbSAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBhbmltYXRpb246IGFwcGVhciAwLjVzIDE7XHJcbn1cclxuLmVyci1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiMxNzNFNDM7XHJcbn1cclxuLmVycm9ybXNnIHtcclxuICAgIGNvbG9yOiMxNzNFNDM7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MnJlbTtcclxufVxyXG4ub2sge1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBwYWRkaW5nOjVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTczRTQzO1xyXG4gICAgYm9yZGVyLXJhZGl1czoycHg7XHJcbiAgICBtYXJnaW4tdG9wOjJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDo0cmVtO1xyXG4gICAgY29sb3I6I0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcbi5vazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyOTc0N0Q7XHJcbiAgICBib3gtc2hhZG93OjAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuICAgIHRyYW5zaXRpb246YWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuQGtleWZyYW1lcyBhcHBlYXIge1xyXG4gICAgZnJvbXt0cmFuc2Zvcm06c2NhbGUoMCk7fVxyXG4gICAgdG97dHJhbnNmb3JtOnNjYWxlKDEpO307XHJcbn1cclxuLyogZXJyb3IgKi9cclxuLyogc3VjY2VzcyAqL1xyXG4uY29udGFpbi1wb3B1cC1zdWNjZXNzIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjI1JTtcclxuICAgIGxlZnQ6MzUlO1xyXG4gICAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9zdWNjZXNzLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIGhlaWdodDoxN3JlbTtcclxuICAgIHdpZHRoOjI1cmVtO1xyXG4gICAgcGFkZGluZzoycmVtIDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIGFuaW1hdGlvbjogYXBwZWFyIDAuNXMgMTtcclxufVxyXG4ub2stc3VjY2VzcyB7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIHBhZGRpbmc6MHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNzNFNDM7XHJcbiAgICBib3JkZXItcmFkaXVzOjJweDtcclxuICAgIG1hcmdpbi10b3A6MTFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDo5cmVtO1xyXG4gICAgY29sb3I6I0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcbi5vay1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI5NzQ3RDtcclxuICAgIGJveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4vKiBzdWNjZXNzICovXHJcbi8qIFBvcHVwICovIl19 */");
            /***/ 
        }),
        /***/ "./src/app/board/board.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/board/board.component.ts ***!
          \******************************************/
        /*! exports provided: BoardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function () { return BoardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.service */ "./src/app/board/list.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/server.service */ "./src/app/services/server.service.ts");
            var BoardComponent = /** @class */ (function () {
                function BoardComponent(listsservice, 
                // private cardsservice:CardService,
                serverservice, route, router) {
                    this.listsservice = listsservice;
                    this.serverservice = serverservice;
                    this.route = route;
                    this.router = router;
                    this.wantaddlist = false;
                    this.adddesc = false;
                    this.update = false;
                    this.bookmark = false;
                    this.wantaddcard = false;
                    this.load = false;
                    this.updatecards = false;
                    this.activity = [];
                    this.showactivity = false;
                    this.boardMembers = [];
                    this.error = false;
                    this.success = false;
                }
                BoardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.load = true;
                    this.lists = this.listsservice.getlists();
                    this.boardid = this.route.snapshot.params.id;
                    this.serverservice.getBoarddetails(this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.res = response;
                        _this.lists = _this.res.lists;
                        _this.activity = _this.res.activities;
                        _this.boardMembers = _this.res.boardMembers;
                        // console.log(this.activity);
                        _this.bookmark = _this.res.bookmark;
                        // console.log(this.editBoard);
                        _this.editBoard.setValue({
                            bName: _this.res.bName,
                            description: _this.res.description,
                        });
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.updateboard = function () {
                    this.update = true;
                };
                BoardComponent.prototype.showinput = function () {
                    this.wantaddlist = true;
                };
                BoardComponent.prototype.showinputcard = function (lid) {
                    this.wantaddcard = true;
                    this.listId = lid;
                    console.log(this.listId);
                };
                BoardComponent.prototype.hideinput = function () {
                    this.wantaddlist = false;
                };
                BoardComponent.prototype.addlist = function (form) {
                    var _this = this;
                    this.load = true;
                    this.wantaddlist = false;
                    var value = form.value;
                    this.serverservice.addList(value.name, this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.lists.push(value);
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                    this.serverservice.getBoarddetails(this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.res = response;
                        _this.lists = _this.res.lists;
                        console.log(_this.res.lists[1].cards);
                        _this.bookmark = _this.res.bookmark;
                        _this.editBoard.setValue({
                            bName: _this.res.bName,
                            description: _this.res.description,
                        });
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.addcard = function (form) {
                    var _this = this;
                    this.load = true;
                    console.log(this.listId);
                    this.wantaddcard = false;
                    var value = form.value;
                    this.serverservice.addCard(value.cname, this.listId, this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        // this.lists.push(value);
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                    this.serverservice.getBoarddetails(this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.res = response;
                        _this.lists = _this.res.lists;
                        // console.log(this.res.lists[1].cards);
                        _this.bookmark = _this.res.bookmark;
                        _this.editBoard.setValue({
                            bName: _this.res.bName,
                            description: _this.res.description,
                        });
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.adddescription = function () {
                    this.adddesc = true;
                };
                BoardComponent.prototype.hideinputdesc = function () {
                    this.adddesc = false;
                };
                BoardComponent.prototype.hidecardinput = function () {
                    this.wantaddcard = false;
                };
                BoardComponent.prototype.updatedetailsboard = function (form) {
                    var _this = this;
                    this.load = true;
                    var value = form.value;
                    console.log(value);
                    this.serverservice.updateBoard(value.bName, value.description, this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.load = false;
                        _this.success = true;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.addbookmark = function () {
                    var _this = this;
                    this.bookmark = true;
                    this.serverservice.bookmark(this.bookmark, this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        console.log(_this.bookmark);
                    }, function (error) {
                        console.log(error);
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.deletebookmark = function () {
                    var _this = this;
                    this.bookmark = false;
                    this.serverservice.bookmark(this.bookmark, this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        console.log(_this.bookmark);
                    }, function (error) {
                        console.log(error);
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.expandcard = function (listId, cardId, cardName, cardDescription, cardPriority, carddueDate, carddueTime, cardreminderBefore) {
                    var _this = this;
                    // console.log(listId);
                    // console.log(cardId);
                    // console.log(cardName);
                    // console.log(cardDescription);
                    // console.log(cardPriority);
                    this.updatecards = true;
                    this.clistId = listId;
                    this.cardId = cardId;
                    this.cardName = cardName;
                    this.cardDescription = cardDescription;
                    this.cardPriority = cardPriority;
                    this.carddueDate = carddueDate;
                    this.carddueTime = carddueTime;
                    this.cardreminderBefore = cardreminderBefore;
                    setTimeout(function () {
                        _this.editCard.setValue({
                            cname: _this.cardName,
                            description: _this.cardDescription,
                            priority: _this.cardPriority,
                        });
                    }, 1000);
                    setTimeout(function () {
                        _this.editDueDate.setValue({
                            dueDate: _this.carddueDate,
                            dueTime: _this.carddueTime,
                            reminderBefore: _this.cardreminderBefore,
                        });
                    }, 1000);
                };
                BoardComponent.prototype.deletecard = function () {
                    var _this = this;
                    this.load = true;
                    this.serverservice.deletecard(this.boardid, this.clistId, this.cardId)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.updatecards = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                    this.serverservice.getBoarddetails(this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.res = response;
                        _this.lists = _this.res.lists;
                        _this.activity = _this.res.activities;
                        _this.boardMembers = _this.res.boardMembers;
                        // console.log(this.activity);
                        _this.bookmark = _this.res.bookmark;
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.updatecard = function (form) {
                    var _this = this;
                    this.load = true;
                    var value = form.value;
                    this.serverservice.updateCard(value.cname, value.description, value.priority, this.boardid, this.clistId, this.cardId)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.success = true;
                    }, function (error) {
                        console.log(error);
                        _this.error = true;
                    });
                    this.serverservice.getBoarddetails(this.boardid)
                        .subscribe(function (response) {
                        // console.log(response);
                        _this.res = response;
                        _this.lists = _this.res.lists;
                        _this.activity = _this.res.activities;
                        // console.log(this.activity);
                        // console.log(this.res.lists[1].cards);
                        _this.bookmark = _this.res.bookmark;
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.showActivity = function () {
                    this.showactivity = true;
                };
                BoardComponent.prototype.hideactivity = function () {
                    this.showactivity = false;
                };
                BoardComponent.prototype.addmember = function (form) {
                    var _this = this;
                    this.load = true;
                    var value = form.value;
                    this.serverservice.addMemberToBoard(value.name, this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        form.reset();
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        form.reset();
                        _this.err = error;
                        _this.errorMsg = _this.err.error.message;
                        _this.error = true;
                    });
                    this.serverservice.getBoarddetails(this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.res = response;
                        _this.lists = _this.res.lists;
                        _this.activity = _this.res.activities;
                        _this.boardMembers = _this.res.boardMembers;
                        // console.log(this.activity);
                        // console.log(this.res.lists[1].cards);
                        _this.bookmark = _this.res.bookmark;
                        _this.load = false;
                        _this.success = true;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.cardduedate = function (form) {
                    var _this = this;
                    this.load = true;
                    var value = form.value;
                    console.log(value);
                    this.serverservice.setduedate(value.dueDate, value.dueTime, value.reminderBefore, this.boardid, this.clistId, this.cardId)
                        .subscribe(function (response) {
                        console.log(response);
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                    this.serverservice.getBoarddetails(this.boardid)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.res = response;
                        _this.lists = _this.res.lists;
                        _this.activity = _this.res.activities;
                        _this.boardMembers = _this.res.boardMembers;
                        // console.log(this.activity);
                        // console.log(this.res.lists[1].cards);
                        _this.bookmark = _this.res.bookmark;
                        _this.load = false;
                        _this.success = true;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                };
                BoardComponent.prototype.ok = function () {
                    this.error = false;
                    this.success = false;
                };
                BoardComponent.prototype.closecard = function () {
                    this.updatecards = false;
                };
                return BoardComponent;
            }());
            BoardComponent.ctorParameters = function () { return [
                { type: _list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"] },
                { type: _services_server_service__WEBPACK_IMPORTED_MODULE_4__["ServerService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
            ], BoardComponent.prototype, "editBoard", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fcard', { static: false })
            ], BoardComponent.prototype, "editCard", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fcardduedate', { static: false })
            ], BoardComponent.prototype, "editDueDate", void 0);
            BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-board',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board/board.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")).default]
                })
            ], BoardComponent);
            /***/ 
        }),
        /***/ "./src/app/board/list.service.ts": 
        /*!***************************************!*\
          !*** ./src/app/board/list.service.ts ***!
          \***************************************/
        /*! exports provided: ListService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function () { return ListService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ListService = /** @class */ (function () {
                function ListService() {
                    this.lists = [];
                }
                ListService.prototype.getlists = function () {
                    return this.lists.slice();
                };
                return ListService;
            }());
            ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ListService);
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/footer/footer.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fstyle {\r\n    font-family: 'Montserrat', sans-serif;\r\n    background:linear-gradient(#3FB0AC,#DDDFD4);\r\n}\r\n.content {\r\n    color:#173E43;\r\n}\r\n.mybtn:focus {\r\n    outline:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mc3R5bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KCMzRkIwQUMsI0REREZENCk7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgY29sb3I6IzE3M0U0MztcclxufVxyXG4ubXlidG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent(authservice) {
                    this.authservice = authservice;
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/guard/auth.guard.ts": 
        /*!*************************************!*\
          !*** ./src/app/guard/auth.guard.ts ***!
          \*************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(authservice, router) {
                    this.authservice = authservice;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function () {
                    if (this.authservice.loggedIn()) {
                        return true;
                    }
                    else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sticky-top {\r\n    /* position:fixed; */\r\n    /* top:0; */\r\n    background : #ffffff;\r\n    width:100%;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.3);\r\n    /* transition:all 0.5s ease; */\r\n    z-index:5;\r\n}\r\n.login {\r\n    margin:0px 15px;\r\n    border:2px solid #173E43;\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: transparent;\r\n    letter-spacing:2px;\r\n    color:#173E43;\r\n    padding:6px 12px;\r\n    position:relative;\r\n    overflow:hidden;\r\n    box-shadow: 0 0 8px 0 rgba(17,22,26,.16), 0 4px 8px 0 rgba(17,22,26,.08), 0 8px 16px 0 rgba(17,22,26,.08);\r\n}\r\n.login:hover {\r\n    color:white;\r\n    transition:0.1s;\r\n}\r\n.login:focus {\r\n    outline:none;\r\n}\r\n.login::before {\r\n    content:'';\r\n    position: absolute;\r\n    left:0;\r\n    width:100%;\r\n    height:0%;\r\n    background:#173E43;\r\n    z-index:-1;\r\n    transition:1s;\r\n    top:0;\r\n    border-radius: 0 0 50% 50%;\r\n}\r\n.login:hover::before {\r\n    height:180%;\r\n}\r\n/* .mouseover:hover {\r\n    background-color:#173E43;\r\n    color:#FAE596;\r\n    transition:all 0.5s ease-in-out;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5R0FBeUc7QUFDN0c7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixVQUFVO0lBQ1YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLEtBQUs7SUFDTCwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBOzs7O0dBSUciLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LXRvcCB7XHJcbiAgICAvKiBwb3NpdGlvbjpmaXhlZDsgKi9cclxuICAgIC8qIHRvcDowOyAqL1xyXG4gICAgYmFja2dyb3VuZCA6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgLyogdHJhbnNpdGlvbjphbGwgMC41cyBlYXNlOyAqL1xyXG4gICAgei1pbmRleDo1O1xyXG59XHJcbi5sb2dpbiB7XHJcbiAgICBtYXJnaW46MHB4IDE1cHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICMxNzNFNDM7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzoycHg7XHJcbiAgICBjb2xvcjojMTczRTQzO1xyXG4gICAgcGFkZGluZzo2cHggMTJweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMTcsMjIsMjYsLjE2KSwgMCA0cHggOHB4IDAgcmdiYSgxNywyMiwyNiwuMDgpLCAwIDhweCAxNnB4IDAgcmdiYSgxNywyMiwyNiwuMDgpO1xyXG59XHJcbi5sb2dpbjpob3ZlciB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246MC4xcztcclxufVxyXG4ubG9naW46Zm9jdXMge1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcbi5sb2dpbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjAlO1xyXG4gICAgYmFja2dyb3VuZDojMTczRTQzO1xyXG4gICAgei1pbmRleDotMTtcclxuICAgIHRyYW5zaXRpb246MXM7XHJcbiAgICB0b3A6MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xyXG59XHJcbi5sb2dpbjpob3Zlcjo6YmVmb3JlIHtcclxuICAgIGhlaWdodDoxODAlO1xyXG59XHJcbi8qIC5tb3VzZW92ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTczRTQzO1xyXG4gICAgY29sb3I6I0ZBRTU5NjtcclxuICAgIHRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn0gKi8iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(authservice) {
                    this.authservice = authservice;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".section1 {\r\n    height:auto;\r\n    width:100%;\r\n}\r\n.vector img {\r\n    margin-top:2rem;\r\n    margin-left:-5rem;\r\n    width:35rem;\r\n}\r\n.text {\r\n    margin-top:1rem;\r\n    padding:50px;\r\n}\r\n.text h2 {\r\n    margin-top:60px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight:600;\r\n    color:#173E43;\r\n}\r\n.text h3 {\r\n    margin-top:90px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight:600;\r\n    color:#173E43;\r\n}\r\n.box {\r\n    margin-top:2rem;\r\n    margin-left:8rem;\r\n    height:15px;\r\n    width:45px;\r\n    background-color:#3FB0AC;\r\n    -webkit-animation:move 1s alternate infinite;\r\n            animation:move 1s alternate infinite;\r\n}\r\n.box1 {\r\n    margin-top:2.5rem;\r\n    height:15px;\r\n    width:45px;\r\n    background-color:#3FB0AC;\r\n    -webkit-animation:movef 1s alternate infinite;\r\n            animation:movef 1s alternate infinite;\r\n}\r\n.rotate {\r\n    width:6rem;\r\n    -webkit-animation:rotate 5s linear infinite;\r\n            animation:rotate 5s linear infinite;\r\n}\r\n.section2 {\r\n    height:auto;\r\n    margin-top:5rem;\r\n    padding:2rem;\r\n    text-align: center;\r\n    background-color:#3FB0AC;\r\n    font-family: 'Poppins', sans-serif;\r\n    color:#173E43;\r\n    background-size: cover;\r\n}\r\n.section3 {\r\n    /* position:absolute; */\r\n    margin-top:3rem;\r\n    height:auto;\r\n    width:100%;\r\n}\r\n.contentbox {\r\n    font-family: 'Montserrat', sans-serif;\r\n    margin-top:3rem;\r\n    height:auto;\r\n    padding:2rem;\r\n    /* background-color:#FAE596; */\r\n    background:linear-gradient(#3FB0AC,white);\r\n    box-shadow: 2px 2px 18px 5px rgba(0,0,0,.1);\r\n}\r\n.section4 {\r\n    height:auto;\r\n    width:100%;\r\n}\r\n.contentbox2 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    margin-top:8rem;\r\n    height:auto;\r\n    padding:2rem;\r\n    /* background-color:#FAE596; */\r\n    background:linear-gradient(#3FB0AC,white);\r\n    box-shadow: 2px 2px 18px 5px rgba(0,0,0,.1);\r\n}\r\n@-webkit-keyframes rotate {\r\n    0%{transform:rotate(0deg);}\r\n    100%{transform:rotate(360deg);}\r\n}\r\n@keyframes rotate {\r\n    0%{transform:rotate(0deg);}\r\n    100%{transform:rotate(360deg);}\r\n}\r\n@-webkit-keyframes move {\r\n    0%{transform:translateX(0px);}\r\n    100%{transform:translateX(-4rem);}\r\n}\r\n@keyframes move {\r\n    0%{transform:translateX(0px);}\r\n    100%{transform:translateX(-4rem);}\r\n}\r\n@-webkit-keyframes movef {\r\n    0%{transform:translateX(0rem);}\r\n    100%{transform:translateX(2.5rem);}\r\n}\r\n@keyframes movef {\r\n    0%{transform:translateX(0rem);}\r\n    100%{transform:translateX(2.5rem);}\r\n}\r\n@-webkit-keyframes movevertical {\r\n    0%{transform:translateY(0rem);}\r\n    100%{transform:translateY(1.5rem);}\r\n}\r\n@keyframes movevertical {\r\n    0%{transform:translateY(0rem);}\r\n    100%{transform:translateY(1.5rem);}\r\n}\r\n@-webkit-keyframes moveright {\r\n    0%{transform:translateX(0rem);}\r\n    100%{transform:translateX(1rem);}\r\n}\r\n@keyframes moveright {\r\n    0%{transform:translateX(0rem);}\r\n    100%{transform:translateX(1rem);}\r\n}\r\n@-webkit-keyframes moveleft {\r\n    0%{transform:translateX(0rem);}\r\n    100%{transform:translateX(-1rem);}\r\n}\r\n@keyframes moveleft {\r\n    0%{transform:translateX(0rem);}\r\n    100%{transform:translateX(-1rem);}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsNENBQW9DO1lBQXBDLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLDZDQUFxQztZQUFyQyxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLFVBQVU7SUFDViwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIseUNBQXlDO0lBQ3pDLDJDQUEyQztBQUMvQztBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSxHQUFHLHNCQUFzQixDQUFDO0lBQzFCLEtBQUssd0JBQXdCLENBQUM7QUFDbEM7QUFIQTtJQUNJLEdBQUcsc0JBQXNCLENBQUM7SUFDMUIsS0FBSyx3QkFBd0IsQ0FBQztBQUNsQztBQUNBO0lBQ0ksR0FBRyx5QkFBeUIsQ0FBQztJQUM3QixLQUFLLDJCQUEyQixDQUFDO0FBQ3JDO0FBSEE7SUFDSSxHQUFHLHlCQUF5QixDQUFDO0lBQzdCLEtBQUssMkJBQTJCLENBQUM7QUFDckM7QUFDQTtJQUNJLEdBQUcsMEJBQTBCLENBQUM7SUFDOUIsS0FBSyw0QkFBNEIsQ0FBQztBQUN0QztBQUhBO0lBQ0ksR0FBRywwQkFBMEIsQ0FBQztJQUM5QixLQUFLLDRCQUE0QixDQUFDO0FBQ3RDO0FBQ0E7SUFDSSxHQUFHLDBCQUEwQixDQUFDO0lBQzlCLEtBQUssNEJBQTRCLENBQUM7QUFDdEM7QUFIQTtJQUNJLEdBQUcsMEJBQTBCLENBQUM7SUFDOUIsS0FBSyw0QkFBNEIsQ0FBQztBQUN0QztBQUNBO0lBQ0ksR0FBRywwQkFBMEIsQ0FBQztJQUM5QixLQUFLLDBCQUEwQixDQUFDO0FBQ3BDO0FBSEE7SUFDSSxHQUFHLDBCQUEwQixDQUFDO0lBQzlCLEtBQUssMEJBQTBCLENBQUM7QUFDcEM7QUFDQTtJQUNJLEdBQUcsMEJBQTBCLENBQUM7SUFDOUIsS0FBSywyQkFBMkIsQ0FBQztBQUNyQztBQUhBO0lBQ0ksR0FBRywwQkFBMEIsQ0FBQztJQUM5QixLQUFLLDJCQUEyQixDQUFDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbjEge1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi52ZWN0b3IgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6MnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0Oi01cmVtO1xyXG4gICAgd2lkdGg6MzVyZW07XHJcbn1cclxuLnRleHQge1xyXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xyXG4gICAgcGFkZGluZzo1MHB4O1xyXG59XHJcbi50ZXh0IGgyIHtcclxuICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjojMTczRTQzO1xyXG59XHJcbi50ZXh0IGgzIHtcclxuICAgIG1hcmdpbi10b3A6OTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBjb2xvcjojMTczRTQzO1xyXG59XHJcbi5ib3gge1xyXG4gICAgbWFyZ2luLXRvcDoycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6OHJlbTtcclxuICAgIGhlaWdodDoxNXB4O1xyXG4gICAgd2lkdGg6NDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNGQjBBQztcclxuICAgIGFuaW1hdGlvbjptb3ZlIDFzIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxufVxyXG4uYm94MSB7XHJcbiAgICBtYXJnaW4tdG9wOjIuNXJlbTtcclxuICAgIGhlaWdodDoxNXB4O1xyXG4gICAgd2lkdGg6NDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNGQjBBQztcclxuICAgIGFuaW1hdGlvbjptb3ZlZiAxcyBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbn1cclxuLnJvdGF0ZSB7XHJcbiAgICB3aWR0aDo2cmVtO1xyXG4gICAgYW5pbWF0aW9uOnJvdGF0ZSA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLnNlY3Rpb24yIHtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDo1cmVtO1xyXG4gICAgcGFkZGluZzoycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0ZCMEFDO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiMxNzNFNDM7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5zZWN0aW9uMyB7XHJcbiAgICAvKiBwb3NpdGlvbjphYnNvbHV0ZTsgKi9cclxuICAgIG1hcmdpbi10b3A6M3JlbTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uY29udGVudGJveCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLXRvcDozcmVtO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBwYWRkaW5nOjJyZW07XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNGQUU1OTY7ICovXHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgjM0ZCMEFDLHdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMThweCA1cHggcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuLnNlY3Rpb240IHtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uY29udGVudGJveDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6OHJlbTtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgcGFkZGluZzoycmVtO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjojRkFFNTk2OyAqL1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoIzNGQjBBQyx3aGl0ZSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDE4cHggNXB4IHJnYmEoMCwwLDAsLjEpO1xyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIDAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyk7fVxyXG4gICAgMTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7fVxyXG59XHJcbkBrZXlmcmFtZXMgbW92ZSB7XHJcbiAgICAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwcHgpO31cclxuICAgIDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTRyZW0pO31cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmVmIHtcclxuICAgIDAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDByZW0pO31cclxuICAgIDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMi41cmVtKTt9XHJcbn1cclxuQGtleWZyYW1lcyBtb3ZldmVydGljYWwge1xyXG4gICAgMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHJlbSk7fVxyXG4gICAgMTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxLjVyZW0pO31cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmVyaWdodCB7XHJcbiAgICAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwcmVtKTt9XHJcbiAgICAxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDFyZW0pO31cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmVsZWZ0IHtcclxuICAgIDAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDByZW0pO31cclxuICAgIDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTFyZW0pO31cclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/server.service */ "./src/app/services/server.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(document, serverservice) {
                    this.serverservice = serverservice;
                    this.myStyle = {};
                    this.myParams = {};
                    this.width = 100;
                    this.height = 100;
                    this.i = 0;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.myStyle = {
                        'position': 'absolute',
                        'width': '100%',
                        'height': '100vh',
                        'z-index': -1,
                        'top': 0,
                        'left': 0,
                        'right': 0,
                        'bottom': 0,
                    };
                    this.myParams = {
                        particles: {
                            number: {
                                value: 80,
                            },
                            color: {
                                value: '#173E43',
                            },
                            shape: {
                                polygon: {
                                    "nb_sides": 5
                                },
                            },
                            line_linked: {
                                "enable": true,
                                "distance": 150,
                                "color": "#173E43",
                                "opacity": 0.5,
                                "width": 2
                            },
                        }
                    };
                    // this.serverservice.getritikimg()
                    // .subscribe(
                    //   (response) => {
                    //     const j = 0;
                    //     // console.log(response);
                    //     this.path=response;
                    //     console.log(this.path[0].image.split('/')[3]+"/"+this.path[0].image.split('/')[4]+"/"+this.path[0].image.split('/')[5]);
                    //     this.imgpath = "https://ef418794.ngrok.io/"+this.path[0].image.split('/')[3]+"/"+this.path[0].image.split('/')[4]+"/"+this.path[0].image.split('/')[5];
                    //   },
                    //   (error) => {
                    //     console.log(error)
                    //   },
                    // )
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
                { type: _services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthService = /** @class */ (function () {
                function AuthService() {
                }
                AuthService.prototype.loggedIn = function () {
                    return !!localStorage.getItem('token');
                };
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('token');
                    localStorage.removeItem('name');
                };
                return AuthService;
            }());
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/server.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/server.service.ts ***!
          \********************************************/
        /*! exports provided: ServerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function () { return ServerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ServerService = /** @class */ (function () {
                function ServerService(http) {
                    this.http = http;
                    this.rootUrl = "https://taskr-wbs.herokuapp.com";
                }
                ServerService.prototype.signUpUser = function (fullName, userName, email, password, confirmPassword) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
                    // console.log(JSON.stringify({name,email,password}));
                    return this.http.post(this.rootUrl + '/api/auth/signUp', JSON.stringify({ fullName: fullName, userName: userName, email: email, password: password, confirmPassword: confirmPassword }), { headers: headers });
                };
                ServerService.prototype.logInUser = function (email, password) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
                    console.log(JSON.stringify({ email: email, password: password }));
                    return this.http.post(this.rootUrl + '/api/auth/login', JSON.stringify({ email: email, password: password }), { headers: headers });
                };
                ServerService.prototype.verifyUser = function (otp, name) {
                    console.log(name);
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
                    return this.http.post(this.rootUrl + '/api/auth/verifyEmail/' + name, JSON.stringify({ otp: otp }), { headers: headers });
                };
                ServerService.prototype.resendOtp = function (name) {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
                    return this.http.get(this.rootUrl + '/api/auth/resendOtp/' + name, { headers: headers });
                };
                ServerService.prototype.addBoard = function (bName) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.post(this.rootUrl + '/api/board/create', JSON.stringify({ bName: bName }), { headers: headers });
                };
                ServerService.prototype.getUserBoards = function () {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.get(this.rootUrl + '/api/home', { headers: headers });
                };
                ServerService.prototype.getBoarddetails = function (id) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.get(this.rootUrl + '/api/board/' + id, { headers: headers });
                };
                ServerService.prototype.addList = function (name, id) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.post(this.rootUrl + '/api/board/addList/' + id, JSON.stringify({ name: name }), { headers: headers });
                };
                ServerService.prototype.updateBoard = function (bName, description, id) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.patch(this.rootUrl + '/api/board/update/' + id, JSON.stringify({ bName: bName, description: description }), { headers: headers });
                };
                ServerService.prototype.bookmark = function (bookmark, id) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.put(this.rootUrl + '/api/board/addToFavourite/' + id, JSON.stringify({ bookmark: bookmark }), { headers: headers });
                };
                ServerService.prototype.addCard = function (name, listid, boardid) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.post(this.rootUrl + '/api/board/addCard/' + boardid + '/' + listid, JSON.stringify({ name: name }), { headers: headers });
                };
                ServerService.prototype.updateCard = function (name, description, priority, boardid, listid, cardid) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.patch(this.rootUrl + '/api/board/updateCard/' + boardid + '/' + listid + '/' + cardid, JSON.stringify({ name: name, description: description, priority: priority }), { headers: headers });
                };
                ServerService.prototype.getActivityboard = function (boardid) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.get(this.rootUrl + '/api/board/updateCard/' + boardid, { headers: headers });
                };
                ServerService.prototype.addMemberToBoard = function (memberUsername, boardid) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.patch(this.rootUrl + '/api/board/addMember/' + boardid, JSON.stringify({ memberUsername: memberUsername }), { headers: headers });
                };
                ServerService.prototype.deletecard = function (boardid, listid, cardid) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.delete(this.rootUrl + '/api/board/deleteCard/' + boardid + '/' + listid + '/' + cardid, { headers: headers });
                };
                ServerService.prototype.setduedate = function (dueDate, dueTime, reminderBefore, boardid, listid, cardid) {
                    var token = localStorage.getItem('token');
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token,
                    });
                    return this.http.put(this.rootUrl + '/api/board/setDueDate/' + boardid + '/' + listid + '/' + cardid, JSON.stringify({ dueDate: dueDate, dueTime: dueTime, reminderBefore: reminderBefore }), { headers: headers });
                };
                return ServerService;
            }());
            ServerService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ServerService);
            /***/ 
        }),
        /***/ "./src/app/shared/confirm-password.directive.ts": 
        /*!******************************************************!*\
          !*** ./src/app/shared/confirm-password.directive.ts ***!
          \******************************************************/
        /*! exports provided: ConfirmPasswordDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordDirective", function () { return ConfirmPasswordDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ConfirmPasswordDirective_1;
            var ConfirmPasswordDirective = ConfirmPasswordDirective_1 = /** @class */ (function () {
                function ConfirmPasswordDirective() {
                }
                ConfirmPasswordDirective.prototype.validate = function (control) {
                    var controlToCompare = control.parent.get(this.appConfirmPassword);
                    if (controlToCompare && controlToCompare.value !== control.value) {
                        return { 'notEqual': true };
                    }
                    return null;
                };
                return ConfirmPasswordDirective;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], ConfirmPasswordDirective.prototype, "appConfirmPassword", void 0);
            ConfirmPasswordDirective = ConfirmPasswordDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
                    selector: '[appConfirmPassword]',
                    providers: [{
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                            useExisting: ConfirmPasswordDirective_1,
                            multi: true
                        }]
                })
            ], ConfirmPasswordDirective);
            /***/ 
        }),
        /***/ "./src/app/user/boards.service.ts": 
        /*!****************************************!*\
          !*** ./src/app/user/boards.service.ts ***!
          \****************************************/
        /*! exports provided: BoardsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsService", function () { return BoardsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BoardsService = /** @class */ (function () {
                function BoardsService() {
                    this.boards = [];
                }
                BoardsService.prototype.getboards = function () {
                    return this.boards.slice();
                };
                return BoardsService;
            }());
            BoardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BoardsService);
            /***/ 
        }),
        /***/ "./src/app/user/user.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/user/user.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched {\r\n    border : 2px solid red;\r\n}\r\n/* Loader */\r\n.background {\r\n    position:absolute;\r\n    height:87.5vh;\r\n    width:100%;\r\n    background:rgba(0,0,0,0.5);\r\n    z-index:2;\r\n}\r\n.loader {\r\n    width:100px;\r\n    height:200px;\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%,-50%);\r\n    z-index:2;\r\n}\r\n.loader-circle {\r\n    width:calc(100% - 0.000001px);\r\n    height:calc(100% - 0.000001px);\r\n    border:8px solid #173E43;\r\n    border-top:8px solid #3FB0AC;\r\n    border-radius:50%;\r\n    -webkit-animation:rotate 5s linear infinite;\r\n            animation:rotate 5s linear infinite;\r\n}\r\n@-webkit-keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n@keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n/* Loader */\r\n/* Scrollbar */\r\n/* width */\r\n.user::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n/* Track */\r\n.user::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey; \r\n    border-radius: 2px;\r\n}\r\n/* Handle */\r\n.user::-webkit-scrollbar-thumb {\r\n    background: #FF6666; \r\n    border-radius: 2px;\r\n}\r\n/* Handle on hover */\r\n.user::-webkit-scrollbar-thumb:hover {\r\n    background: #000000; \r\n}\r\n/* Scrollbar */\r\n/* width */\r\n.contain-activity-board::-webkit-scrollbar {\r\n    width: 5px;\r\n}\r\n/* Track */\r\n.contain-activity-board::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 5px grey; \r\n    border-radius: 2px;\r\n}\r\n/* Handle */\r\n.contain-activity-board::-webkit-scrollbar-thumb {\r\n    background: #696969; \r\n    border-radius: 2px;\r\n}\r\n/* Handle on hover */\r\n.contain-activity-board::-webkit-scrollbar-thumb:hover {\r\n    background: #000000; \r\n}\r\n/* Scrollbar */\r\n.user{\r\n    font-family: 'Montserrat', sans-serif;\r\n    padding-top:1rem;\r\n    overflow:auto;\r\n    background:url('user.png');\r\n    background-size:cover;\r\n    height:87.5vh;\r\n    width:100%;\r\n}\r\n.user-name {\r\n    position:fixed;\r\n    top:20;\r\n}\r\n.board {\r\n    margin-left:18rem;\r\n}\r\n.box {\r\n    width:15rem;\r\n    height:12rem;\r\n    background:linear-gradient(#173E43,#3FB0AC);\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    border-radius:5px;\r\n}\r\n.box:hover {\r\n    transform:scale(1.03);\r\n    text-decoration:none;\r\n    transition:all 0.4s ease-in-out;\r\n}\r\n.name {\r\n    text-align:center;\r\n    vertical-align: middle;\r\n    line-height: 10rem;\r\n}\r\n.add {\r\n    width:15rem;\r\n    height:12rem;\r\n    background:#DDDFD4;\r\n    border-radius:5px;\r\n}\r\n.add-card-background {\r\n    position:absolute;\r\n    top:5rem;\r\n    width:100%;\r\n    height:100%;\r\n    background-color:rgba(0,0,0,0.8);\r\n}\r\n.contain-activity-board {\r\n    position:relative;\r\n    top:5%;\r\n    left:35%;\r\n    overflow:auto;\r\n    font-family: 'Raleway', sans-serif;\r\n    background:url('notification.png');\r\n    background-size:cover;\r\n    color:#000000;\r\n    height:30rem;\r\n    width:30rem;\r\n    padding:2rem 2rem;\r\n    border-radius:5px;\r\n    -webkit-animation:appear 0.5s 1;\r\n            animation:appear 0.5s 1;\r\n}\r\n.add-card {\r\n    background:linear-gradient(40deg,#45cafc,#303f9f)!important;\r\n    border-radius:10em;\r\n    margin-top:1rem;\r\n    border:0px;\r\n    padding:10px 30px;\r\n    color:#FFFFFF;\r\n    box-shadow: 2px 2px 18px 2px rgba(0,0,0,0.2);\r\n}\r\n.add-card:focus {\r\n    outline:none;\r\n}\r\n.add-card:hover {\r\n    transform:translateX(0.5rem);\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.5s ease-in-out;\r\n}\r\n@-webkit-keyframes appear {\r\n    from{transform:scale(0);}\r\n    to{transform:scale(1);};\r\n}\r\n@keyframes appear {\r\n    from{transform:scale(0);}\r\n    to{transform:scale(1);};\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQSxXQUFXO0FBQ1g7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsUUFBUTtJQUNSLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsMkNBQW1DO1lBQW5DLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksS0FBSyx3QkFBd0IsQ0FBQztBQUNsQztBQUZBO0lBQ0ksS0FBSyx3QkFBd0IsQ0FBQztBQUNsQztBQUNBLFdBQVc7QUFDWCxjQUFjO0FBQ2QsVUFBVTtBQUNWO0lBQ0ksVUFBVTtBQUNkO0FBRUEsVUFBVTtBQUNWO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUVBLFdBQVc7QUFDWDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQSxjQUFjO0FBQ2QsVUFBVTtBQUNWO0lBQ0ksVUFBVTtBQUNkO0FBRUEsVUFBVTtBQUNWO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUVBLFdBQVc7QUFDWDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQSxjQUFjO0FBQ2Q7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwwQkFBNEM7SUFDNUMscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0Msb0VBQW9FO0lBQ3BFLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sUUFBUTtJQUNSLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0NBQW9EO0lBQ3BELHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLCtCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDJEQUEyRDtJQUMzRCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLG9FQUFvRTtJQUNwRSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLEtBQUssa0JBQWtCLENBQUM7SUFDeEIsR0FBRyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzFCO0FBSEE7SUFDSSxLQUFLLGtCQUFrQixDQUFDO0lBQ3hCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQTtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlciA6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuLyogTG9hZGVyICovXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0Ojg3LjV2aDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KTtcclxuICAgIHotaW5kZXg6MjtcclxufVxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB6LWluZGV4OjI7XHJcbn1cclxuLmxvYWRlci1jaXJjbGUge1xyXG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gMC4wMDAwMDFweCk7XHJcbiAgICBoZWlnaHQ6Y2FsYygxMDAlIC0gMC4wMDAwMDFweCk7XHJcbiAgICBib3JkZXI6OHB4IHNvbGlkICMxNzNFNDM7XHJcbiAgICBib3JkZXItdG9wOjhweCBzb2xpZCAjM0ZCMEFDO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBhbmltYXRpb246cm90YXRlIDVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt9XHJcbn1cclxuLyogTG9hZGVyICovXHJcbi8qIFNjcm9sbGJhciAqL1xyXG4vKiB3aWR0aCAqL1xyXG4udXNlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuLnVzZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG4udXNlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGNjY2NjsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4udXNlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDsgXHJcbn1cclxuLyogU2Nyb2xsYmFyICovXHJcbi8qIHdpZHRoICovXHJcbi5jb250YWluLWFjdGl2aXR5LWJvYXJkOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG4uY29udGFpbi1hY3Rpdml0eS1ib2FyZDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbi5jb250YWluLWFjdGl2aXR5LWJvYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjk2OTY5OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbi5jb250YWluLWFjdGl2aXR5LWJvYXJkOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOyBcclxufVxyXG4vKiBTY3JvbGxiYXIgKi9cclxuLnVzZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZy10b3A6MXJlbTtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXIucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGhlaWdodDo4Ny41dmg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi51c2VyLW5hbWUge1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICB0b3A6MjA7XHJcbn1cclxuLmJvYXJkIHtcclxuICAgIG1hcmdpbi1sZWZ0OjE4cmVtO1xyXG59XHJcbi5ib3gge1xyXG4gICAgd2lkdGg6MTVyZW07XHJcbiAgICBoZWlnaHQ6MTJyZW07XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgjMTczRTQzLCMzRkIwQUMpO1xyXG4gICAgYm94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4uYm94OmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjAzKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC40cyBlYXNlLWluLW91dDtcclxufVxyXG4ubmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogMTByZW07XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gICAgd2lkdGg6MTVyZW07XHJcbiAgICBoZWlnaHQ6MTJyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiNERERGRDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4uYWRkLWNhcmQtYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1cmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuOCk7XHJcbn1cclxuLmNvbnRhaW4tYWN0aXZpdHktYm9hcmQge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6NSU7XHJcbiAgICBsZWZ0OjM1JTtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9ub3RpZmljYXRpb24ucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICBoZWlnaHQ6MzByZW07XHJcbiAgICB3aWR0aDozMHJlbTtcclxuICAgIHBhZGRpbmc6MnJlbSAycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBhbmltYXRpb246YXBwZWFyIDAuNXMgMTtcclxufVxyXG4uYWRkLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDBkZWcsIzQ1Y2FmYywjMzAzZjlmKSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwZW07XHJcbiAgICBtYXJnaW4tdG9wOjFyZW07XHJcbiAgICBib3JkZXI6MHB4O1xyXG4gICAgcGFkZGluZzoxMHB4IDMwcHg7XHJcbiAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxOHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLmFkZC1jYXJkOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG4uYWRkLWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMC41cmVtKTtcclxuICAgIGJveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XHJcbiAgICBmcm9te3RyYW5zZm9ybTpzY2FsZSgwKTt9XHJcbiAgICB0b3t0cmFuc2Zvcm06c2NhbGUoMSk7fTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/user/user.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/user/user.component.ts ***!
          \****************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _boards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boards.service */ "./src/app/user/boards.service.ts");
            /* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/server.service */ "./src/app/services/server.service.ts");
            var UserComponent = /** @class */ (function () {
                function UserComponent(boardsservice, serverservice) {
                    this.boardsservice = boardsservice;
                    this.serverservice = serverservice;
                    this.wantaddboard = false;
                    this.boardid = [];
                    this.load = false;
                    this.error = false;
                    this.success = false;
                    this.shownotifications = false;
                    this.notifications = [];
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.load = true;
                    this.boards = this.boardsservice.getboards();
                    this.serverservice.getUserBoards()
                        .subscribe(function (response) {
                        console.log(response);
                        _this.res = response;
                        _this.boards = _this.res.boards;
                        _this.notifications = _this.res.notifications;
                        _this.name = _this.res.fullName;
                        for (_this.i = 0; _this.i < _this.boards.length; _this.i++) {
                            _this.id = _this.boards[_this.i].id;
                            // console.log(this.id);
                            for (_this.j = _this.i; _this.j < _this.i + 1; _this.j++) {
                                _this.boardid.push(_this.id);
                                // console.log(this.boardid)
                            }
                        }
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                    });
                };
                UserComponent.prototype.showinput = function () {
                    this.wantaddboard = true;
                };
                UserComponent.prototype.addboard = function (form) {
                    var _this = this;
                    this.load = true;
                    this.wantaddboard = false;
                    var value = form.value;
                    console.log(form.value);
                    this.serverservice.addBoard(value.bName)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.boards.push(value);
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                    this.serverservice.getUserBoards()
                        .subscribe(function (response) {
                        console.log(response);
                        _this.res = response;
                        _this.boards = _this.res.boards;
                        for (_this.i = 0; _this.i < _this.boards.length; _this.i++) {
                            _this.id = _this.boards[_this.i].id;
                            // console.log(this.id);
                            for (_this.j = _this.i; _this.j < _this.i + 1; _this.j++) {
                                _this.boardid.push(_this.id);
                                // console.log(this.boardid)
                            }
                        }
                        _this.load = false;
                        _this.success = true;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.error = true;
                    });
                };
                UserComponent.prototype.chkid = function (id) {
                    console.log(id);
                };
                UserComponent.prototype.showNotifications = function () {
                    this.shownotifications = true;
                };
                UserComponent.prototype.hideNotifications = function () {
                    this.shownotifications = false;
                };
                UserComponent.prototype.ok = function () {
                    this.error = false;
                    this.success = false;
                };
                return UserComponent;
            }());
            UserComponent.ctorParameters = function () { return [
                { type: _boards_service__WEBPACK_IMPORTED_MODULE_2__["BoardsService"] },
                { type: _services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] }
            ]; };
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/app/verification/verification.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/verification/verification.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched {\r\n    border : 2px solid red;\r\n}\r\n/* Loader */\r\n.background {\r\n    position:absolute;\r\n    height:87.5vh;\r\n    width:100%;\r\n    background:rgba(0,0,0,0.5);\r\n    z-index:2;\r\n}\r\n.loader {\r\n    width:100px;\r\n    height:200px;\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform:translate(-50%,-50%);\r\n    z-index:2;\r\n}\r\n.loader-circle {\r\n    width:calc(100% - 0.000001px);\r\n    height:calc(100% - 0.000001px);\r\n    border:8px solid #173E43;\r\n    border-top:8px solid #3FB0AC;\r\n    border-radius:50%;\r\n    -webkit-animation:rotate 5s linear infinite;\r\n            animation:rotate 5s linear infinite;\r\n}\r\n@-webkit-keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n@keyframes rotate {\r\n    100%{transform:rotate(360deg);}\r\n}\r\n/* Loader */\r\n/* Popup */\r\n.popup-background {\r\n    position:absolute;\r\n    top:5rem;\r\n    width:100%;\r\n    height:87.5vh;\r\n    background-color:rgba(0,0,0,0.7);\r\n}\r\n/* error */\r\n.contain-popup {\r\n    position:relative;\r\n    top:25%;\r\n    left:35%;\r\n    background:url('error.png');\r\n    background-size:cover;\r\n    color:#FFFFFF;\r\n    overflow:auto;\r\n    height:17rem;\r\n    width:25rem;\r\n    padding:2rem 2rem;\r\n    border-radius:5px;\r\n    z-index:10;\r\n    -webkit-animation: appear 0.5s 1;\r\n            animation: appear 0.5s 1;\r\n}\r\n.err-heading {\r\n    color:#173E43;\r\n}\r\n.errormsg {\r\n    color:#173E43;\r\n    text-align:center;\r\n    margin-top:2rem;\r\n}\r\n.ok {\r\n    border:0;\r\n    padding:5px 15px;\r\n    background-color:#173E43;\r\n    border-radius:2px;\r\n    margin-top:2rem;\r\n    margin-left:4rem;\r\n    color:#FFFFFF;\r\n    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.2);\r\n}\r\n.ok:hover {\r\n    background-color:#29747D;\r\n    box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n    transition:all 0.3s ease-in-out;\r\n}\r\n@-webkit-keyframes appear {\r\n    from{transform:scale(0);}\r\n    to{transform:scale(1);};\r\n}\r\n@keyframes appear {\r\n    from{transform:scale(0);}\r\n    to{transform:scale(1);};\r\n}\r\n/* error */\r\n.box {\r\n    margin:10rem 0rem;\r\n    padding:2rem;\r\n    border-radius:5px;\r\n    box-shadow:2px 2px 10px rgba(0,0,0,0.2);\r\n}\r\n.mybutton {\r\n    border:2px solid #3FB0AC;\r\n    background-color:transparent;\r\n    color:#3FB0AC;\r\n    margin-left:8rem;\r\n}\r\n.mybutton:hover {\r\n    background-color:#3FB0AC;\r\n    color:white;\r\n    transition:all 0.2s ease-in-out;\r\n}\r\n.resend {\r\n    border:2px solid #173E43;\r\n    background-color:transparent;\r\n    color:#173E43;\r\n    margin-left:7rem;\r\n}\r\n.resend:hover {\r\n    background-color:#173E43;\r\n    color:white;\r\n    transition:all 0.2s ease-in-out;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0EsV0FBVztBQUNYO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLEtBQUssd0JBQXdCLENBQUM7QUFDbEM7QUFGQTtJQUNJLEtBQUssd0JBQXdCLENBQUM7QUFDbEM7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixVQUFVO0lBQ1YsYUFBYTtJQUNiLGdDQUFnQztBQUNwQztBQUNBLFVBQVU7QUFDVjtJQUNJLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsUUFBUTtJQUNSLDJCQUE2QztJQUM3QyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdDQUF3QjtZQUF4Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9FQUFvRTtJQUNwRSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLEtBQUssa0JBQWtCLENBQUM7SUFDeEIsR0FBRyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzFCO0FBSEE7SUFDSSxLQUFLLGtCQUFrQixDQUFDO0lBQ3hCLEdBQUcsa0JBQWtCLENBQUMsQ0FBQTtBQUMxQjtBQUNBLFVBQVU7QUFDVjtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXIgOiAycHggc29saWQgcmVkO1xyXG59XHJcbi8qIExvYWRlciAqL1xyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGhlaWdodDo4Ny41dmg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB6LWluZGV4OjI7XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDoyMDBweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgei1pbmRleDoyO1xyXG59XHJcbi5sb2FkZXItY2lyY2xlIHtcclxuICAgIHdpZHRoOmNhbGMoMTAwJSAtIDAuMDAwMDAxcHgpO1xyXG4gICAgaGVpZ2h0OmNhbGMoMTAwJSAtIDAuMDAwMDAxcHgpO1xyXG4gICAgYm9yZGVyOjhweCBzb2xpZCAjMTczRTQzO1xyXG4gICAgYm9yZGVyLXRvcDo4cHggc29saWQgIzNGQjBBQztcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgYW5pbWF0aW9uOnJvdGF0ZSA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgMTAwJXt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7fVxyXG59XHJcbi8qIExvYWRlciAqL1xyXG4vKiBQb3B1cCAqL1xyXG4ucG9wdXAtYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1cmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo4Ny41dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC43KTtcclxufVxyXG4vKiBlcnJvciAqL1xyXG4uY29udGFpbi1wb3B1cCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDoyNSU7XHJcbiAgICBsZWZ0OjM1JTtcclxuICAgIGJhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvZXJyb3IucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgaGVpZ2h0OjE3cmVtO1xyXG4gICAgd2lkdGg6MjVyZW07XHJcbiAgICBwYWRkaW5nOjJyZW0gMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgei1pbmRleDoxMDtcclxuICAgIGFuaW1hdGlvbjogYXBwZWFyIDAuNXMgMTtcclxufVxyXG4uZXJyLWhlYWRpbmcge1xyXG4gICAgY29sb3I6IzE3M0U0MztcclxufVxyXG4uZXJyb3Jtc2cge1xyXG4gICAgY29sb3I6IzE3M0U0MztcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDoycmVtO1xyXG59XHJcbi5vayB7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIHBhZGRpbmc6NXB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMxNzNFNDM7XHJcbiAgICBib3JkZXItcmFkaXVzOjJweDtcclxuICAgIG1hcmdpbi10b3A6MnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OjRyZW07XHJcbiAgICBjb2xvcjojRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLm9rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI5NzQ3RDtcclxuICAgIGJveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5Aa2V5ZnJhbWVzIGFwcGVhciB7XHJcbiAgICBmcm9te3RyYW5zZm9ybTpzY2FsZSgwKTt9XHJcbiAgICB0b3t0cmFuc2Zvcm06c2NhbGUoMSk7fTtcclxufVxyXG4vKiBlcnJvciAqL1xyXG4uYm94IHtcclxuICAgIG1hcmdpbjoxMHJlbSAwcmVtO1xyXG4gICAgcGFkZGluZzoycmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBib3gtc2hhZG93OjJweCAycHggMTBweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuLm15YnV0dG9uIHtcclxuICAgIGJvcmRlcjoycHggc29saWQgIzNGQjBBQztcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjojM0ZCMEFDO1xyXG4gICAgbWFyZ2luLWxlZnQ6OHJlbTtcclxufVxyXG4ubXlidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM0ZCMEFDO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5yZXNlbmQge1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjMTczRTQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiMxNzNFNDM7XHJcbiAgICBtYXJnaW4tbGVmdDo3cmVtO1xyXG59XHJcbi5yZXNlbmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTczRTQzO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/verification/verification.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/verification/verification.component.ts ***!
          \********************************************************/
        /*! exports provided: VerificationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function () { return VerificationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/server.service */ "./src/app/services/server.service.ts");
            var VerificationComponent = /** @class */ (function () {
                function VerificationComponent(serverservice, route, router) {
                    this.serverservice = serverservice;
                    this.route = route;
                    this.router = router;
                    this.resend = false;
                    this.seconds = 59;
                    this.minute = 1;
                    this.load = false;
                    this.error = false;
                }
                VerificationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.name = this.route.snapshot.params.name;
                    setTimeout(function () {
                        _this.resend = true;
                    }, 120000);
                    setInterval(function () {
                        if (_this.seconds > 0) {
                            _this.seconds--;
                        }
                        else {
                            _this.minute--;
                            _this.seconds = 59;
                        }
                    }, 1000);
                };
                VerificationComponent.prototype.onResend = function () {
                    var _this = this;
                    this.load = true;
                    this.seconds = 60;
                    this.minute = 1;
                    setInterval(function () {
                        if (_this.seconds > 0) {
                            _this.seconds--;
                        }
                        else {
                            _this.minute--;
                            _this.seconds = 60;
                        }
                    }, 1000000);
                    this.resend = false;
                    setTimeout(function () {
                        _this.resend = true;
                    }, 120000);
                    this.serverservice.resendOtp(this.name)
                        .subscribe(function (response) {
                        console.log(response);
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.err = error;
                        _this.errorMsg = _this.err.error.message;
                        _this.error = true;
                    });
                };
                VerificationComponent.prototype.Verify = function (form) {
                    var _this = this;
                    this.load = true;
                    var value = form.value;
                    // console.log(this.id);
                    this.serverservice.verifyUser(value.otp, this.name)
                        .subscribe(function (response) {
                        _this.tk = response;
                        console.log(_this.tk);
                        // console.log(this.tk.userLoginResponse.userName);
                        localStorage.setItem('token', _this.tk.userLoginResponse.token);
                        localStorage.setItem('name', _this.tk.userLoginResponse.userName);
                        _this.router.navigate(['/user']);
                        _this.load = false;
                    }, function (error) {
                        console.log(error);
                        _this.load = false;
                        _this.err = error;
                        _this.errorMsg = _this.err.error.message;
                        _this.error = true;
                    });
                };
                VerificationComponent.prototype.ok = function () {
                    this.error = false;
                };
                return VerificationComponent;
            }());
            VerificationComponent.ctorParameters = function () { return [
                { type: _services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            VerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-verification',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verification/verification.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verification.component.css */ "./src/app/verification/verification.component.css")).default]
                })
            ], VerificationComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\Github\taskr\client\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map