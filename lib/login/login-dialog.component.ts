import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Router } from '@angular/router';

import { LoginService } from './login.service';
// import { DataService } from '../../../services/data/data.service';
// import { MapConfigService } from '../../../services/map/map-config.service';
// import { TimelineConfigService } from './../../../services/app/timeline-config.service';

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.less'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class LoginDialogComponent implements OnInit {

  @Output() loginSuccess = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private loginService: LoginService,
    // private dataService: DataService,
    // private mapconfig: MapConfigService,
    // private router: Router,
    // private timelineConfigService: TimelineConfigService
  ) { }

  ngOnInit() {
  }

  user: string = "geok";
  password: string = "123geok";
  url: string = "";
  projectData: any;
  isVisible: boolean;

  onClick(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isVisible = false;
      this.toggleLoginPageOpacity();
    }
  }

  onLoginDialogClick(event) {
    this.toggleLoginPageOpacity();
  }

  toggleLoginPageOpacity() {
    // if (this.isVisible) {
    //   document.getElementById("divLoginPage").style.opacity = "0.5";
    // } else {
    //   document.getElementById("divLoginPage").style.opacity = "1";
    // }
  }

  Login() {
    // $('#busyContainer').prepend('<div id="busy"><img id="busyImg" src="assets/img/loaders/orange-white.GIF"></div>');
    // $('#busy').show(); // show busy
    Promise.resolve(this.loginService.login(this.user, this.password, this.url)).then(function (data) {
      debugger;
      localStorage.setItem('userToken', JSON.stringify({ token: data.Token }));
      localStorage.setItem('user', JSON.stringify({ user: data.User }));
      saveProjectId(JSON.parse(data.Projects)[0].ID);
      // let param = data.Parameters[0];
      // if (param.LAT && param.LNG) {
      //   this.mapconfig.setLng(param.LAT);
      //   this.mapconfig.setLat(param.LNG);
      // }
      // if (param.YEAR_START && param.YEAR_END) {
      //   let start = JSON.parse(param.YEAR_START);
      //   let end = JSON.parse(param.YEAR_END);
      //   this.timelineConfigService.setYearRange(start.year, start.month, end.year, end.month);
      //   this.timelineConfigService.setSelectedTime(start.year, start.month);
      // }
      // if (param.GEOMETRY_ID) {
      //   this.mapconfig.setStandardGeometryID(param.GEOMETRY_ID);
      // }

      this.loginSuccess.emit(data);

      // this.router.navigate(["/home"]);

    }.bind(this), function (e) {
      // $("#lResult").text('Login was due to technical difficulties not possible. Try later.')
      // $('#busy').hide();
    });

    function saveProjectId(id) {
      var name = "projectId";
      document.cookie = name + "=" + id;
    }

  }

}
