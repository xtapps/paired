import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { MobileNumberComponent } from './pages/mobile-number/mobile-number.component';
import { OtpVerifyComponent } from './pages/otp-verify/otp-verify.component';
import { StatusComponent } from './pages/status/status.component';
import { FirstNameComponent } from './pages/first-name/first-name.component';
import { LastNameComponent } from './pages/last-name/last-name.component';
import { BirthdayComponent } from './pages/birthday/birthday.component';
import { SelectGenderComponent } from './pages/select-gender/select-gender.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FindPartnerComponent } from './pages/find-partner/find-partner.component';
import { SearchPeopleComponent } from './pages/search-people/search-people.component';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import { ScanQrComponent } from './pages/scan-qr/scan-qr.component';
import { NearbyDevicesComponent } from './pages/nearby-devices/nearby-devices.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MainComponent } from './pages/layout/main/main.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { UpdatedProfileComponent } from './pages/updated-profile/updated-profile.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { AddPhotoComponent } from './pages/add-photo/add-photo.component';
import { MessageSendComponent } from './pages/message-send/message-send.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
        path: 'signin',
        component: SigninComponent
  },
  {
        path: 'register',
        component: RegisterComponent
  },
  {
        path: 'mobile-number',
        component: MobileNumberComponent
  },
  {
        path: 'otp-verify',
        component: OtpVerifyComponent
  },
  {
        path: 'status',
        component: StatusComponent
  },
 
  { 
      path: '',
      component: MainComponent, 
      children: [
       {
        path: 'first-name',
        component: FirstNameComponent
       },
          {
                path: 'last-name',
                component: LastNameComponent
          },
          {
                path: 'birthday',
                component: BirthdayComponent
          },
          {
                path: 'select-gender',
                component: SelectGenderComponent
          },
          {
                path: 'dashboard',
                component: DashboardComponent
          },
          {
                path: 'find-partner',
                component: FindPartnerComponent
          },
          {
                path: 'search-people',
                component: SearchPeopleComponent
          },
          {
                path: 'send-message',
                component: SendMessageComponent
          },
          {
                path: 'scan-qr',
                component: ScanQrComponent
          },
          {
                path: 'nearby-devices',
                component: NearbyDevicesComponent
          },
          {
                path: 'notification',
                component: NotificationComponent
          },
          {
                path: 'my-profile',
                component: MyProfileComponent
          },
          {
                path: 'edit-profile',
                component: EditProfileComponent
          },
          {
                path: 'updated-profile',
                component: UpdatedProfileComponent
          },
          {
                path: 'user-settings',
                component: UserSettingsComponent
          },
          {
                path: 'add-photo',
                component: AddPhotoComponent
          },
          {
                path: 'message-send',
                component: MessageSendComponent
          },
      ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
