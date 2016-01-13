package io.colorgy.rnapp.views;
import io.colorgy.rnapp.R;

import android.content.Context;
import android.support.design.widget.CollapsingToolbarLayout;
import android.support.v7.widget.Toolbar;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;

public class ReactTableCreateCoursePageLayout extends FrameLayout {
  public Toolbar mToolbar;
  public CollapsingToolbarLayout mCollapsingToolbarLayout;

  public ReactTableCreateCoursePageLayout(Context context) {
    super(context);
    LayoutInflater layoutInflater = LayoutInflater.from(context);
    View view = layoutInflater.inflate(R.layout.table_create_course_page_layout, this, false);
    this.addView(view);

    mToolbar = (Toolbar) findViewById(R.id.table_create_course_page_layout_toolbar);
    mCollapsingToolbarLayout = (CollapsingToolbarLayout) findViewById(R.id.table_create_course_page_layout_collapsing_toolbar_layout);
  }
}
