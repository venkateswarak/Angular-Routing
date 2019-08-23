import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ServersService } from '../servers.service';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  routeParams: Subscription;


  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(+id);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params.id);
      }
    );
  }

  onEditClick() {
this.router.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'});
  }

}
