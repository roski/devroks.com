import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Post } from '@dr-shared/models/post';

@Component({
  selector: 'dr-blog-stream-item-preview',
  templateUrl: './blog-stream-item-preview.component.html',
  styleUrls: ['./blog-stream-item-preview.component.scss']
})
export class BlogStreamItemPreviewComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
