package io.colorgy.rnapp.views;

import javax.annotation.Nullable;

import android.view.View;
import android.view.ViewGroup;
import android.view.ViewGroup.LayoutParams;
import android.view.LayoutInflater;

import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.ThemedReactContext;

public class ReactTableCreateCoursePageLayoutManager extends ViewGroupManager<ReactTableCreateCoursePageLayout> {

  @Override
  public String getName() {
    return "RCTTableCreateCoursePageLayoutAndroid";
  }

  @Override
  public ReactTableCreateCoursePageLayout createViewInstance(ThemedReactContext context) {
    return new ReactTableCreateCoursePageLayout(context);
  }

  @ReactProp(name = "toolbarTitle")
  public void setToolbarTitle(ReactTableCreateCoursePageLayout view, String title) {
    view.mToolbar.setTitle(title);
    view.mCollapsingToolbarLayout.setTitle(title);
  }

  @ReactProp(name = "toolbarHeight")
  public void setToolbarHeight(ReactTableCreateCoursePageLayout view, int height) {
    LayoutParams params = view.mToolbar.getLayoutParams();
    params.height = height;
  }

  @ReactProp(name = "toolbarPaddingTop")
  public void setToolbarPaddingTop(ReactTableCreateCoursePageLayout view, int paddingTop) {
    view.mToolbar.setPadding(0, paddingTop, 0, 0);
  }
}
