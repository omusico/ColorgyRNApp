package io.colorgy.rnapp.views;
import io.colorgy.rnapp.R;

import android.content.Context;
import android.support.design.widget.CollapsingToolbarLayout;
import android.support.design.widget.CoordinatorLayout;
import android.support.v7.widget.Toolbar;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;

public class ReactTableCreateCoursePageLayout extends FrameLayout {
  public LinearLayout mContent;
  public Toolbar mToolbar;
  public CollapsingToolbarLayout mCollapsingToolbarLayout;
  public LinearLayout mBackground;

  public Integer scrollviewIndex;
  public Integer toolbarIndex;
  public int toolbarHeight = 0;
  public int toolbarPaddingTop = 0;

  public ReactTableCreateCoursePageLayout(Context context) {
    super(context);
    LayoutInflater layoutInflater = LayoutInflater.from(context);
    View view = layoutInflater.inflate(R.layout.table_create_course_page_layout, this, false);
    this.addView(view);

    mContent = (LinearLayout) findViewById(R.id.table_create_course_page_layout_main_content);
    // mToolbar = (Toolbar) findViewById(R.id.table_create_course_page_layout_toolbar);
    mCollapsingToolbarLayout = (CollapsingToolbarLayout) findViewById(R.id.table_create_course_page_layout_collapsing_toolbar_layout);
    mBackground = (LinearLayout) findViewById(R.id.table_create_course_page_layout_collapsing_toolbar_background);
  }
}
