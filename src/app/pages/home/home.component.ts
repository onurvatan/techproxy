import { Component, OnInit, Output } from '@angular/core';
import { ServiceItem } from 'src/app/models/service-item';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() { }

  AngularServiceItem: ServiceItem = {
    ServiceDescription: "Angular is a TypeScript-based front-end web application framework. It is best suited to create single page apps.",
    ServiceLogoUrl: "assets/img/tech-logos/angular.svg",
    ServiceName: "Angular",
    ServiceUrl: "https://angular.io/"
  };

  DotnetServiceItem: ServiceItem = {
    ServiceDescription: ".NET is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform successor to .NET Framework.",
    ServiceLogoUrl: "assets/img/tech-logos/NET_Core.png",
    ServiceName: ".NET Core",
    ServiceUrl: "https://dotnet.microsoft.com/"
  };


  AzureServiceItem: ServiceItem = {
    ServiceDescription: "Microsoft Azure, often referred to as Azure, is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers.",
    ServiceLogoUrl: "assets/img/tech-logos/azure.svg",
    ServiceName: "Azure",
    ServiceUrl: "https://azure.microsoft.com/"
  };

  KubernetesServiceItem: ServiceItem = {
    ServiceDescription: "Kubernetes is an open source system for automating the delivery, scaling and management of container applications originally designed by Google.",
    ServiceLogoUrl: "assets/img/tech-logos/kubernetes.png",
    ServiceName: "Kubernetes",
    ServiceUrl: "https://kubernetes.io/"
  };



  ngOnInit(): void {

  }

}

