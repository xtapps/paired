import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

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


@NgModule({
  declarations: [
                AppComponent,
                SigninComponent,
                RegisterComponent,
                MobileNumberComponent,
                OtpVerifyComponent,
                StatusComponent,
                FirstNameComponent,
                LastNameComponent,
                BirthdayComponent,
                SelectGenderComponent,
                DashboardComponent,
                FindPartnerComponent,
                SearchPeopleComponent,
                SendMessageComponent,
                ScanQrComponent,
                NearbyDevicesComponent,
                NotificationComponent,
                MyProfileComponent,
                MainComponent,
                EditProfileComponent,
                UpdatedProfileComponent,
                UserSettingsComponent,
                AddPhotoComponent,
                MessageSendComponent
                ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
