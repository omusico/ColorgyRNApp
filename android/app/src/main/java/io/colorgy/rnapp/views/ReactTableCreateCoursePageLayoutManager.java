package io.colorgy.rnapp.views;
import io.colorgy.rnapp.R;

import javax.annotation.Nullable;

import android.support.v4.widget.NestedScrollView;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.ViewGroup;
import android.support.design.widget.CollapsingToolbarLayout;
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
    if (child instanceof Toolbar) {
      android.util.Log.v("DDDDDD", "Add View Toolbar");
      view.toolbarIndex = index;
      view.mToolbar = (Toolbar) child;

      CollapsingToolbarLayout.LayoutParams params = new CollapsingToolbarLayout.LayoutParams(CollapsingToolbarLayout.LayoutParams.MATCH_PARENT, view.toolbarHeight);
      params.setCollapseMode(CollapsingToolbarLayout.LayoutParams.COLLAPSE_MODE_PIN);
      child.setLayoutParams(params);
      child.setPadding(0, view.toolbarPaddingTop, 0, 0);

      view.mCollapsingToolbarLayout.addView(child);
    } else if (child instanceof NestedScrollView) {
      view.scrollviewIndex = index;
      view.mContent.addView(child, index);
    } else {
      view.mBackground.addView(child, index);
    }
  }

  @Override
  public int getChildCount(ReactTableCreateCoursePageLayout view) {
    int vChildrenCount = 0;
    if (view.toolbarIndex != null) vChildrenCount += 1;
    android.util.Log.v("DDDDDD", "GCC" + vChildrenCount);

    return view.mContent.getChildCount() + view.mBackground.getChildCount() + vChildrenCount;
  }

  @Override
  public View getChildAt(ReactTableCreateCoursePageLayout view, int index) {
    if (view.toolbarIndex == index) {
      android.util.Log.v("DDDDDD", "GetChildAt Toolbar" + index);
      return view.mToolbar;
    } else if (view.scrollviewIndex == index) {
      return view.mContent.getChildAt(index);
    } else {
      android.util.Log.v("DDDDDD", "GetChildAt Not Toolbar" + index);
      return view.mBackground.getChildAt(index);
    }
  }

  @Override
  public void removeViewAt(ReactTableCreateCoursePageLayout view, int index) {
    if (view.toolbarIndex == index) {
      view.mCollapsingToolbarLayout.removeView(view.mToolbar);
      view.toolbarIndex = null;
      android.util.Log.v("DDDDDD", "RmView Toolbar" + index);
    } else if (view.scrollviewIndex == index) {
      view.mContent.removeViewAt(index);
      view.scrollviewIndex = null;
    } else {
      android.util.Log.v("DDDDDD", "RmView Not Toolbar" + index);
      view.mBackground.removeViewAt(index);
    }
  }

  @Override
  public void removeAllViews(ReactTableCreateCoursePageLayout view) {
    android.util.Log.v("DDDDDD", "RAV");
    view.mContent.removeAllViews();
    view.mBackground.removeAllViews();
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
    CollapsingToolbarLayout.LayoutParams params = (CollapsingToolbarLayout.LayoutParams) view.mToolbar.getLayoutParams();
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
