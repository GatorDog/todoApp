(()=>{"use strict";var e;(e=firstProject).projectItems.forEach((e=>{let t=document.createElement("input");t.type="checkbox",t.classList.add("checkListCheckbox");let n=document.createElement("li");n.innerHTML=e.title,n.classList.add("checkListItem");let c=document.createElement("input");c.type="date",c.classList.add("dueDate"),c.value=e.dueDate;let l=document.getElementById("todoList");l.appendChild(t),l.appendChild(n),l.appendChild(c)})),document.getElementById("activeProjectDisplay").innerHTML=e.project.title,function(e){let t=document.getElementById("projectDropdownList");e.forEach((e=>{let n=document.createElement("div");n.className="projectItem",n.innerHTML=e.title,t.appendChild(n)}));const n=document.createElement("div");n.id="addProject",n.innerHTML="Add Project",t.appendChild(n);var c=document.getElementById("myModal"),l=document.getElementsByClassName("close")[0];n.onclick=function(){c.style.display="block"},l.onclick=function(){c.style.display="none"},window.onclick=function(e){e.target==c&&(c.style.display="none")}}(allProjects.list),function(){const e=document.getElementById("hamburgerMenu"),t=document.getElementById("projectDropdownList");e.addEventListener("click",(()=>{"block"===t.style.display?t.style.display="none":t.style.display="block"}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsSUFBMkJBLEdBQUFBLEVDVVRDLGNEUk5DLGFBQWFDLFNBQVFDLElBRXpCLElBQUlDLEVBQVdDLFNBQVNDLGNBQWMsU0FDdENGLEVBQVNHLEtBQU8sV0FDaEJILEVBQVNJLFVBQVVDLElBQUkscUJBR3ZCLElBQUlDLEVBQVVMLFNBQVNDLGNBQWMsTUFDckNJLEVBQVFDLFVBQVlSLEVBQVNTLE1BQzdCRixFQUFRRixVQUFVQyxJQUFJLGlCQUV0QixJQUFJSSxFQUFVUixTQUFTQyxjQUFjLFNBQ3JDTyxFQUFRTixLQUFPLE9BQ2ZNLEVBQVFMLFVBQVVDLElBQUksV0FDdEJJLEVBQVFDLE1BQVFYLEVBQVNVLFFBR3pCLElBQUlFLEVBQVdWLFNBQVNXLGVBQWUsWUFFdkNELEVBQVNFLFlBQVliLEdBQ3JCVyxFQUFTRSxZQUFZUCxHQUNyQkssRUFBU0UsWUFBWUosTUFHRVIsU0FBU1csZUFBZSx3QkFDOUJMLFVBQVlaLEVBQVFBLFFBQVFhLE1FM0JyRCxTQUE4Qk0sR0FDMUIsSUFBSUMsRUFBZWQsU0FBU1csZUFBZSx1QkFFM0NFLEVBQWFoQixTQUFTSCxJQUVsQixJQUFJcUIsRUFBY2YsU0FBU0MsY0FBYyxPQUN6Q2MsRUFBWUMsVUFBWSxjQUN4QkQsRUFBWVQsVUFBWVosRUFBUWEsTUFFaENPLEVBQWFGLFlBQVlHLE1BSTdCLE1BQU1FLEVBQWFqQixTQUFTQyxjQUFjLE9BQzFDZ0IsRUFBV0MsR0FBSyxhQUNoQkQsRUFBV1gsVUFBWSxjQUN2QlEsRUFBYUYsWUFBWUssR0FHN0IsSUFBSUUsRUFBUW5CLFNBQVNXLGVBQWUsV0FLaENTLEVBQU9wQixTQUFTcUIsdUJBQXVCLFNBQVMsR0FHcERKLEVBQVdLLFFBQVUsV0FDbkJILEVBQU1JLE1BQU1DLFFBQVUsU0FJeEJKLEVBQUtFLFFBQVUsV0FDYkgsRUFBTUksTUFBTUMsUUFBVSxRQUl4QkMsT0FBT0gsUUFBVSxTQUFTSSxHQUNwQkEsRUFBTUMsUUFBVVIsSUFDbEJBLEVBQU1JLE1BQU1DLFFBQVUsU0Q1QjFCLENBQW9CSSxZQUFZQyxNRVhoQyxXQUNJLE1BQU1DLEVBQVk5QixTQUFTVyxlQUFlLGlCQUNwQ29CLEVBQXNCL0IsU0FBU1csZUFBZSx1QkFFcERtQixFQUFVRSxpQkFBaUIsU0FBUyxLQUNVLFVBQXRDRCxFQUFvQlIsTUFBTUMsUUFDMUJPLEVBQW9CUixNQUFNQyxRQUFVLE9BR3BDTyxFQUFvQlIsTUFBTUMsUUFBVSxXRkdoRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG9kby8uL3NyYy9wb3B1bGF0ZUNoZWNrbGlzdC5qcyIsIndlYnBhY2s6Ly9Ub2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL1RvZG8vLi9zcmMvcG9wdWxhdGVQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly9Ub2RvLy4vc3JjL2hhbWJ1cmdlckV2ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHBvcHVsYXRlQ2hlY2tsaXN0KHByb2plY3QpIHtcclxuXHJcbiAgICBwcm9qZWN0LnByb2plY3RJdGVtcy5mb3JFYWNoKHRvZG9JdGVtID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnXHJcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tMaXN0Q2hlY2tib3gnKTtcclxuXHJcblxyXG4gICAgICAgIGxldCB0b2RvRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgIHRvZG9ET00uaW5uZXJIVE1MID0gdG9kb0l0ZW0udGl0bGU7XHJcbiAgICAgICAgdG9kb0RPTS5jbGFzc0xpc3QuYWRkKCdjaGVja0xpc3RJdGVtJyk7XHJcblxyXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGR1ZURhdGUudHlwZSA9ICdkYXRlJztcclxuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcclxuICAgICAgICBkdWVEYXRlLnZhbHVlID0gdG9kb0l0ZW0uZHVlRGF0ZTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9MaXN0JylcclxuXHJcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9ET00pO1xyXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgYWN0aXZlUHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlUHJvamVjdERpc3BsYXknKTtcclxuICAgIGFjdGl2ZVByb2plY3REaXNwbGF5LmlubmVySFRNTCA9IHByb2plY3QucHJvamVjdC50aXRsZTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9wdWxhdGVDaGVja2xpc3QiLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tICcuL2NyZWF0ZVByb2plY3QuanMnXHJcbmltcG9ydCBjcmVhdGVUb2RvSXRlbSBmcm9tICcuL2NyZWF0ZVRvZG9JdGVtLmpzJ1xyXG5pbXBvcnQgcHJvamVjdFRvZG9TdHJ1Y3R1cmVyIGZyb20gJy4vcHJvamVjdFRvZG9TdHJ1Y3R1cmVyLmpzJ1xyXG5pbXBvcnQgcG9wdWxhdGVDaGVja2xpc3QgZnJvbSAnLi9wb3B1bGF0ZUNoZWNrbGlzdC5qcydcclxuaW1wb3J0IGhhbWJ1cmdlckV2ZW50IGZyb20gJy4vaGFtYnVyZ2VyRXZlbnQuanMnXHJcbmltcG9ydCBwb3B1bGF0ZVByb2plY3RMaXN0IGZyb20gJy4vcG9wdWxhdGVQcm9qZWN0TGlzdC5qcydcclxuXHJcblxyXG5cclxuXHJcbnBvcHVsYXRlQ2hlY2tsaXN0KGZpcnN0UHJvamVjdCk7XHJcbnBvcHVsYXRlUHJvamVjdExpc3QoYWxsUHJvamVjdHMubGlzdCk7XHJcbmhhbWJ1cmdlckV2ZW50KCk7IiwiZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0TGlzdCAocHJvamVjdEFycmF5KSB7XHJcbiAgICBsZXQgZHJvcGRvd25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0RHJvcGRvd25MaXN0XCIpXHJcblxyXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTmFtZSA9IFwicHJvamVjdEl0ZW1cIjtcclxuICAgICAgICBwcm9qZWN0SXRlbS5pbm5lckhUTUwgPSBwcm9qZWN0LnRpdGxlO1xyXG5cclxuICAgICAgICBkcm9wZG93bkxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGFkZFByb2plY3QuaWQgPSBcImFkZFByb2plY3RcIjtcclxuICAgIGFkZFByb2plY3QuaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiXHJcbiAgICBkcm9wZG93bkxpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcclxuXHJcbiAgICAvLyBHZXQgdGhlIG1vZGFsXHJcbnZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKTtcclxuXHJcbi8vIEdldCB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIG1vZGFsXHJcblxyXG4vLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxyXG52YXIgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcclxuXHJcbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXHJcbmFkZFByb2plY3Qub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn1cclxuXHJcbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxyXG5zcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufSBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9wdWxhdGVQcm9qZWN0TGlzdCIsImZ1bmN0aW9uIGhhbWJ1cmdlckV2ZW50KCkge1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYW1idXJnZXJNZW51XCIpO1xyXG4gICAgY29uc3QgcHJvamVjdERyb3Bkb3duTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdERyb3Bkb3duTGlzdFwiKTtcclxuXHJcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAocHJvamVjdERyb3Bkb3duTGlzdC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgcHJvamVjdERyb3Bkb3duTGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9qZWN0RHJvcGRvd25MaXN0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbWJ1cmdlckV2ZW50Il0sIm5hbWVzIjpbInByb2plY3QiLCJmaXJzdFByb2plY3QiLCJwcm9qZWN0SXRlbXMiLCJmb3JFYWNoIiwidG9kb0l0ZW0iLCJjaGVja2JveCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2RvRE9NIiwiaW5uZXJIVE1MIiwidGl0bGUiLCJkdWVEYXRlIiwidmFsdWUiLCJ0b2RvTGlzdCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0QXJyYXkiLCJkcm9wZG93bkxpc3QiLCJwcm9qZWN0SXRlbSIsImNsYXNzTmFtZSIsImFkZFByb2plY3QiLCJpZCIsIm1vZGFsIiwic3BhbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvbmNsaWNrIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwiZXZlbnQiLCJ0YXJnZXQiLCJhbGxQcm9qZWN0cyIsImxpc3QiLCJoYW1idXJnZXIiLCJwcm9qZWN0RHJvcGRvd25MaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=