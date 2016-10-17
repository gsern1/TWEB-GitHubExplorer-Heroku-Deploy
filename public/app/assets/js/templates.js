angular.module('githubexplorer').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/gefeature1/gefeature1.html',
    "<div class=\"container\" ng-init=\"getMostStarredRepos()\">\r" +
    "\n" +
    "	<h1>Content from: gefeature1 page</h1>\r" +
    "\n" +
    "	<p>List of the most starred repos : </p>\r" +
    "\n" +
    "	<table class=\"table\">\r" +
    "\n" +
    "		<thead>\r" +
    "\n" +
    "			<th>Name</th>\r" +
    "\n" +
    "			<th>Forks</th>\r" +
    "\n" +
    "			<th>Stars</th>\r" +
    "\n" +
    "		</thead>\r" +
    "\n" +
    "		<tbody>\r" +
    "\n" +
    "			<tr ng-hide=\"reposFound\"><th>No repos!</th><td></td><td></td></tr>\r" +
    "\n" +
    "			<div ng-show=\"reposFound\">\r" +
    "\n" +
    "				<tr ng-repeat=\"repo in most_starred_repos\">\r" +
    "\n" +
    "					<td><a href=\"{{repo.html_url}}\" target=\"_blank\"> {{repo.name}} </a></td>\r" +
    "\n" +
    "					<td>{{repo.forks}}</td>\r" +
    "\n" +
    "					<td>{{repo.stargazers_count}}</td>\r" +
    "\n" +
    "				</tr>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</tbody>\r" +
    "\n" +
    "	</table>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/gefeature2/gefeature2.html',
    "<div class=\"container\" ng-init=\"getRepoData()\">\r" +
    "\n" +
    "    <div>\r" +
    "\n" +
    "		<h1>{{username}}</h1>\r" +
    "\n" +
    "		<p>Number of commits by contributor in the repo {{repoName}}</p>\r" +
    "\n" +
    "        <h3>Username<br/>\r" +
    "\n" +
    "        <input ng-model=\"username\" ng-change=\"getRepoData()\"/></h3><br/>\r" +
    "\n" +
    "        <h3>Repository name<br/>\r" +
    "\n" +
    "        <input ng-model=\"repoName\" ng-change=\"getRepoData()\"/></h3><br/>\r" +
    "\n" +
    "		<canvas id=\"pie\" class=\"chart chart-pie\" chart-data=\"numberOfCommits\" chart-labels=\"authors\"><br/>\r" +
    "\n" +
    "	</div><br/><br/>\r" +
    "\n" +
    "</canvas>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/gefeature3/gefeature3.html',
    "<div class=\"container\" ng-init=\"getUserData()\">\r" +
    "\n" +
    "	<div class=\"repolist clearfix\">\r" +
    "\n" +
    "		<h1>{{username}}</h1>\r" +
    "\n" +
    "		<p>List of repos for the user {{username}}</p>\r" +
    "\n" +
    "        <h3>Username<br/>\r" +
    "\n" +
    "        <input ng-model=\"username\" ng-change=\"getUserData()\"/></h3><br/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "		<h1><p ng-hide=\"reposFound\">No repos!</p></h1>\r" +
    "\n" +
    "	\r" +
    "\n" +
    "		<div ng-show=\"reposFound\">\r" +
    "\n" +
    "			<strong>Repos List:</strong><br/>\r" +
    "\n" +
    "			<div ng-repeat=\"repo in repos\">\r" +
    "\n" +
    "				<a href=\"{{repo.html_url}}\" target=\"_blank\"> {{repo.name}} </a><br/>\r" +
    "\n" +
    "			</div>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "	</div><br/><br/>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/home/home.html',
    "<div class=\"container\">\r" +
    "\n" +
    "	<br>\r" +
    "\n" +
    "	<div class=\"well text-center\">\r" +
    "\n" +
    "		<h1>{{ vm.title }}</h1>\r" +
    "\n" +
    "		<h3>{{ vm.version }}</h3>\r" +
    "\n" +
    "		<p>This is a template for a simple home screen website. Use it as a starting point to create something more unique.</p>\r" +
    "\n" +
    "		<code>app/modules/home/home.html</code>\r" +
    "\n" +
    "		<hr>\r" +
    "\n" +
    "    <h1>Features</h1>\r" +
    "\n" +
    "		<ul class=\"list-group\">\r" +
    "\n" +
    "			<li class=\"list-group-item\" ng-repeat=\"item in vm.listFeatures\">{{item.feature}}</li>\r" +
    "\n" +
    "		</ul>\r" +
    "\n" +
    "		<p><a href=\"http://www.github.com/newaeonweb/generator-angm\" class=\"btn btn-primary\" role=\"button\">Learn more »</a></p>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar-tpl.html',
    "<nav class=\"navbar navbar-inverse\">\r" +
    "\n" +
    "	<div class=\"container\">\r" +
    "\n" +
    "		<div class=\"navbar-header\">\r" +
    "\n" +
    "			<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r" +
    "\n" +
    "				<span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "				<span class=\"icon-bar\"></span>\r" +
    "\n" +
    "				<span class=\"icon-bar\"></span>\r" +
    "\n" +
    "				<span class=\"icon-bar\"></span>\r" +
    "\n" +
    "			</button>\r" +
    "\n" +
    "			<a class=\"navbar-brand\" href=\"/#!/\">{{ brand }}</a>\r" +
    "\n" +
    "		</div>\r" +
    "\n" +
    "		<div id=\"navbar\" class=\"collapse navbar-collapse\">\r" +
    "\n" +
    "			<ul class=\"nav navbar-nav\">\r" +
    "\n" +
    "				<li ng-repeat=\"item in menus\" ng-class=\"{active:isActive('#/' + item.link)}\">\r" +
    "\n" +
    "					<a ui-sref=\"{{ item.link }}\">{{ item.name }}</a>\r" +
    "\n" +
    "				</li>\r" +
    "\n" +
    "			</ul>\r" +
    "\n" +
    "		</div><!--/.nav-collapse -->\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "</nav>\r" +
    "\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar.html',
    "<div ng-controller=\"NavBarCtrl as vm\">\r" +
    "\n" +
    "    <nav-bar menus=\"vm.menu\" brand=\"vm.title\"></nav-bar>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
