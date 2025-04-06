import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { inject } from '@vercel/analytics';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SweetAlert2Module, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'freshCarts';
  constructor(private flowbiteService: FlowbiteService) {
    inject();
  }
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {});
  }
}
