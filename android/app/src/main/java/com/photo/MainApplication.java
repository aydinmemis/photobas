package com.photo;

import android.app.Application;

//import com.facebook.react.ReactApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;


import com.BV.LinearGradient.LinearGradientPackage;


import com.oblador.vectoricons.VectorIconsPackage;

import android.support.annotation.NonNull;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;



import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {


    @Override
     public boolean isDebug() {
         // Make sure you are using BuildConfig from your own application
         return BuildConfig.DEBUG;
     }
      @NonNull
      protected List<ReactPackage> getPackages() {
         // Add additional packages you require here
         // No need to add RnnPackage and MainReactPackage
         return Arrays.<ReactPackage>asList(

            new VectorIconsPackage(),
            new LinearGradientPackage(),
             new PickerPackage(),
             new RNFetchBlobPackage()

         );
     }

     @Override
     public List<ReactPackage> createAdditionalReactPackages() {
         return getPackages();
     }
    @Override
    public String getJSMainModuleName() {
        return "index";
    }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
