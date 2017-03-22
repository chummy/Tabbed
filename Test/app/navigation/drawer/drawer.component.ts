import { Component, ViewChild, ChangeDetectorRef, OnInit, AfterViewInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { Page } from "ui/page";

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import sideDrawerModule = require("nativescript-telerik-ui/sidedrawer");

import * as common from "../shared";
import * as shared from "../../shared";

@Component({
  moduleId: module.id,
  selector: "ns-drawer-menu",
  templateUrl: "drawer.component.html"
})
export class DrawerMenuComponent implements OnInit, AfterViewInit {
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

  protected _drawer: SideDrawerType;

  navigationItems: Array<shared.NavigationItem>;

  constructor(
    private _navigationService: shared.NavigationService,
    private _changeDetectionRef: ChangeDetectorRef,
    private _router: Router
  ) {
    this.navigationItems = this._navigationService.routes;
  }

  ngOnInit() {
    this._navigationService.openDrawer$.subscribe(
      (data) => {
        if (!this._drawer) return;
        this._drawer.toggleDrawerState();
      }
    );

    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this._drawer.closeDrawer();
      }
    });
  }

  ngAfterViewInit() {
    this._drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }
}
