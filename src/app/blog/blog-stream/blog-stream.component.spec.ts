import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStreamComponent } from './blog-stream.component';

describe('BlogStreamComponent', () => {
  let component: BlogStreamComponent;
  let fixture: ComponentFixture<BlogStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
