(()=>{"use strict";const t=function(t){return{title:t,desc:null,dueDate:null,priority:null,notes:null}};let e=function(t){let e=function(t){return{title:t,desc:null}}("firstProject");return function(t){return{project:t,projectItems:[]}}(e)}();var c;e.projectItems.push(t("firstItem")),e.projectItems.push(t("secondItem")),console.log(e),e.projectItems.forEach((t=>console.log(t))),(c=e).projectItems.forEach((t=>{let e=document.createElement("input");e.type="checkbox",e.classList.add("checkListCheckbox");let c=document.createElement("li");c.innerHTML=t.title,c.classList.add("checkListItem");let n=document.getElementById("todoList");n.appendChild(e),n.appendChild(c)})),document.getElementById("projectList").innerHTML=c.project.title})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBVUEsTUNHQSxFQWJBLFNBQXlCQSxHQVNyQixNQVJlLENBQ1hDLE1BQU9ELEVBQ1BFLEtBQU0sS0FDTkMsUUFBUyxLQUNUQyxTQUFVLEtBQ1ZDLE1BQU8sT0NPZixJQUFJQyxFQVBKLFNBQW9CQyxHQUNoQixJQUFJQyxFRlBSLFNBQXdCRCxHQU1wQixNQUxjLENBQ1ZOLE1BQU9NLEVBQ1BMLEtBQU0sTUVJSSxDQU1ZLGdCQUgxQixPQ1ZKLFNBQWdDTSxHQU01QixNQUxtQixDQUNmQSxRQUFTQSxFQUNUQyxhQUFjLElES1AsQ0FBc0JELEdBS2xCRSxHRWJuQixJQUFrQkYsRUZlbEJGLEVBQWFHLGFBQWFFLEtBQUssRUFBZSxjQUM5Q0wsRUFBYUcsYUFBYUUsS0FBSyxFQUFlLGVBRTlDQyxRQUFRQyxJQUFJUCxHQUNaQSxFQUFhRyxhQUFhSyxTQUFRQyxHQUFXSCxRQUFRQyxJQUFJRSxNRW5CdkNQLEVGcUJURixHRWxCR0csYUFBYUssU0FBUUUsSUFFekIsSUFBSUMsRUFBV0MsU0FBU0MsY0FBYyxTQUN0Q0YsRUFBU0csS0FBTyxXQUNoQkgsRUFBU0ksVUFBVUMsSUFBSSxxQkFHdkIsSUFBSUMsRUFBVUwsU0FBU0MsY0FBYyxNQUNyQ0ksRUFBUUMsVUFBWVIsRUFBU2YsTUFDN0JzQixFQUFRRixVQUFVQyxJQUFJLGlCQUV0QixJQUFJRyxFQUFXUCxTQUFTUSxlQUFlLFlBRXZDRCxFQUFTRSxZQUFZVixHQUNyQlEsRUFBU0UsWUFBWUosTUFHUEwsU0FBU1EsZUFBZSxlQUM5QkYsVUFBWWhCLEVBQVFBLFFBQVFQLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub2RvLy4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vVG9kby8uL3NyYy9jcmVhdGVUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly9Ub2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1RvZG8vLi9zcmMvcHJvamVjdFRvZG9TdHJ1Y3R1cmVyLmpzIiwid2VicGFjazovL1RvZG8vLi9zcmMvZG9tTWFuaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlUHJvamVjdCAocHJvamVjdFRpdGxlKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IHtcclxuICAgICAgICB0aXRsZTogcHJvamVjdFRpdGxlLFxyXG4gICAgICAgIGRlc2M6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcHJvamVjdFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDsiLCJmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSAoaXRlbVRpdGxlKSB7XHJcbiAgICBsZXQgdG9kb0l0ZW0gPSB7XHJcbiAgICAgICAgdGl0bGU6IGl0ZW1UaXRsZSxcclxuICAgICAgICBkZXNjOiBudWxsLFxyXG4gICAgICAgIGR1ZURhdGU6IG51bGwsIFxyXG4gICAgICAgIHByaW9yaXR5OiBudWxsLFxyXG4gICAgICAgIG5vdGVzOiBudWxsLFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2RvSXRlbTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG9JdGVtIiwiaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSAnLi9jcmVhdGVQcm9qZWN0LmpzJ1xyXG5pbXBvcnQgY3JlYXRlVG9kb0l0ZW0gZnJvbSAnLi9jcmVhdGVUb2RvSXRlbS5qcydcclxuaW1wb3J0IHByb2plY3RUb2RvU3RydWN0dXJlciBmcm9tICcuL3Byb2plY3RUb2RvU3RydWN0dXJlci5qcydcclxuaW1wb3J0IGRvbU1hbmlwIGZyb20gJy4vZG9tTWFuaXAuanMnXHJcblxyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0VGl0bGUpXHJcbiAgICBsZXQgbGluayA9IHByb2plY3RUb2RvU3RydWN0dXJlcihwcm9qZWN0KTtcclxuXHJcbiAgICByZXR1cm4gbGlua1xyXG59XHJcblxyXG5sZXQgZmlyc3RQcm9qZWN0ID0gbmV3UHJvamVjdChcImZpcnN0UHJvamVjdFwiKTtcclxuXHJcbmZpcnN0UHJvamVjdC5wcm9qZWN0SXRlbXMucHVzaChjcmVhdGVUb2RvSXRlbShcImZpcnN0SXRlbVwiKSk7XHJcbmZpcnN0UHJvamVjdC5wcm9qZWN0SXRlbXMucHVzaChjcmVhdGVUb2RvSXRlbShcInNlY29uZEl0ZW1cIikpXHJcblxyXG5jb25zb2xlLmxvZyhmaXJzdFByb2plY3QpO1xyXG5maXJzdFByb2plY3QucHJvamVjdEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiBjb25zb2xlLmxvZyhlbGVtZW50KSkgXHJcblxyXG5kb21NYW5pcChmaXJzdFByb2plY3QpOyIsImZ1bmN0aW9uIHByb2plY3RUb2RvU3RydWN0dXJlciAocHJvamVjdCkge1xyXG4gICAgbGV0IHJlbGF0aW9uc2hpcCA9IHtcclxuICAgICAgICBwcm9qZWN0OiBwcm9qZWN0LFxyXG4gICAgICAgIHByb2plY3RJdGVtczogW10gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlbGF0aW9uc2hpcDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdFRvZG9TdHJ1Y3R1cmVyIiwiZnVuY3Rpb24gZG9tTWFuaXAocHJvamVjdCkge1xyXG5cclxuXHJcbiAgICBwcm9qZWN0LnByb2plY3RJdGVtcy5mb3JFYWNoKHRvZG9JdGVtID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnXHJcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tMaXN0Q2hlY2tib3gnKTtcclxuXHJcblxyXG4gICAgICAgIGxldCB0b2RvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgIHRvZG9ET00uaW5uZXJIVE1MID0gdG9kb0l0ZW0udGl0bGU7XHJcbiAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCdjaGVja0xpc3RJdGVtJyk7XHJcblxyXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvTGlzdCcpXHJcblxyXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRE9NKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcclxuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IHByb2plY3QucHJvamVjdC50aXRsZTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG9tTWFuaXAiXSwibmFtZXMiOlsiaXRlbVRpdGxlIiwidGl0bGUiLCJkZXNjIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwibm90ZXMiLCJmaXJzdFByb2plY3QiLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0IiwicHJvamVjdEl0ZW1zIiwibmV3UHJvamVjdCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0b2RvSXRlbSIsImNoZWNrYm94IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImNsYXNzTGlzdCIsImFkZCIsInRvZG9ET00iLCJpbm5lckhUTUwiLCJ0b2RvTGlzdCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9