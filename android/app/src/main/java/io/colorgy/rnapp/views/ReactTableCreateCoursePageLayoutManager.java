package io.colorgy.rnapp.views;
import io.colorgy.rnapp.R;

import javax.annotation.Nullable;

import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewGroup.LayoutParams;
import android.view.LayoutInflater;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ReactProp;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.Map;

public class ReactTableCreateCoursePageLayoutManager extends ViewGroupManager<ReactTableCreateCoursePageLayout> {

  @Override
  public String getName() {
    return "RCTTableCreateCoursePageLayoutAndroid";
  }

  @Override
  public ReactTableCreateCoursePageLayout createViewInstance(ThemedReactContext context) {
    android.util.Log.v("DDDDDD", "CREATE");
    return new ReactTableCreateCoursePageLayout(context);
  }

  @Override
  public void addView(ReactTableCreateCoursePageLayout view, View child, int index) {
    if (!(child instanceof Toolbar)) {
      android.util.Log.v("DDDDDD", "Add View Not Toolbar");
      view.mContent.addView(child, index);
    } else {
      android.util.Log.v("DDDDDD", "Add View Toolbar");
      view.toolbarIndex = index;
      view.mToolbar = (Toolbar) child;

      LayoutParams params = new LayoutParams(LayoutParams.MATCH_PARENT, view.toolbarHeight);
      child.setLayoutParams(params);
      child.setPadding(0, view.toolbarPaddingTop, 0, 0);

      view.mCollapsingToolbarLayout.addView(child);
    }
  }

  @Override
  public int getChildCount(ReactTableCreateCoursePageLayout view) {
    int vChildrenCount = 0;
    if (view.toolbarIndex != null) vChildrenCount += 1;
    android.util.Log.v("DDDDDD", "GCC" + vChildrenCount);

    return view.mContent.getChildCount() + vChildrenCount;
  }

  @Override
  public View getChildAt(ReactTableCreateCoursePageLayout view, int index) {
    if (view.toolbarIndex == index) {
      android.util.Log.v("DDDDDD", "GetChildAt Toolbar" + index);
      return view.mToolbar;
    } else {
      android.util.Log.v("DDDDDD", "GetChildAt Not Toolbar" + index);
      return view.mContent.getChildAt(index);
    }
  }

  @Override
  public void removeViewAt(ReactTableCreateCoursePageLayout view, int index) {
    if (view.toolbarIndex == index) {
      view.mCollapsingToolbarLayout.removeView(view.mToolbar);
      view.toolbarIndex = null;
      android.util.Log.v("DDDDDD", "RmView Toolbar" + index);
    } else {
      android.util.Log.v("DDDDDD", "RmView Not Toolbar" + index);
      view.mContent.removeViewAt(index);
    }
  }

  @Override
  public void removeAllViews(ReactTableCreateCoursePageLayout view) {
    android.util.Log.v("DDDDDD", "RAV");
    view.mContent.removeAllViews();
  }

  @ReactProp(name = "toolbarTitle")
  public void setToolbarTitle(ReactTableCreateCoursePageLayout view, String title) {
//    view.mToolbar.setTitle(title);
    view.mCollapsingToolbarLayout.setTitle(title);
  }

  @ReactProp(name = "toolbarTitleColor", customType = "Color")
  public void setToolbarTitleColor(ReactTableCreateCoursePageLayout view, int color) {
//    view.mToolbar.setTitleTextColor(color);
    view.mCollapsingToolbarLayout.setCollapsedTitleTextColor(color);
  }

  @ReactProp(name = "toolbarExpandedTitleColor", customType = "Color")
  public void setToolbarExpandedTitleColor(ReactTableCreateCoursePageLayout view, int color) {
    view.mCollapsingToolbarLayout.setExpandedTitleColor(color);
  }

  @ReactProp(name = "toolbarHeight")
  public void setToolbarHeight(ReactTableCreateCoursePageLayout view, int height) {
    view.toolbarHeight = height;
    if (null == view.mToolbar) return;
    LayoutParams params = view.mToolbar.getLayoutParams();
    params.height = height;
    view.mCollapsingToolbarLayout.setMinimumHeight(height);
  }

  @ReactProp(name = "toolbarPaddingTop")
  public void setToolbarPaddingTop(ReactTableCreateCoursePageLayout view, int paddingTop) {
    view.toolbarPaddingTop = paddingTop;
    if (null == view.mToolbar) return;
    view.mToolbar.setPadding(0, paddingTop, 0, 0);
  }

  @ReactProp(name = "contentScrimColor", customType = "Color")
  public void setContentScrimColor(ReactTableCreateCoursePageLayout view, int color) {
    view.mCollapsingToolbarLayout.setContentScrimColor(color);
    view.mCollapsingToolbarLayout.setBackgroundColor(color);
  }
}
