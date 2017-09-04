'use strict';

var serverUrl = 'http://localhost:3000';

document.querySelector('.news').addEventListener('click', function (e) {
    e.preventDefault();
    getRequest('/getNews', function (data) {
        console.log(data);
    });
});

var getRequest = function getRequest(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', serverUrl + path);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        callback(data);
    };
};

document.querySelector('.search').addEventListener('click', function (e) {
    e.preventDefault();
    getRequest('/getProfit', function (data) {});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC5qcyJdLCJuYW1lcyI6WyJzZXJ2ZXJVcmwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0UmVxdWVzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicGF0aCIsImNhbGxiYWNrIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJvbmxvYWQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsWUFBWSx1QkFBbEI7O0FBR0FDLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NDLGdCQUFoQyxDQUFpRCxPQUFqRCxFQUEwRCxVQUFDQyxDQUFELEVBQU87QUFDN0RBLE1BQUVDLGNBQUY7QUFDQUMsZUFBVyxVQUFYLEVBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUM3QkMsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNILEtBRkQ7QUFHSCxDQUxEOztBQU9BLElBQU1ELGFBQWEsU0FBYkEsVUFBYSxDQUFDSSxJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDbkMsUUFBTUMsTUFBTSxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsUUFBSUUsSUFBSixDQUFTLEtBQVQsRUFBZ0JkLFlBQVlVLElBQTVCO0FBQ0FFLFFBQUlHLGdCQUFKLENBQXFCLFFBQXJCLEVBQStCLGtCQUEvQjtBQUNBSCxRQUFJRyxnQkFBSixDQUFxQixjQUFyQixFQUFxQyxrQkFBckM7QUFDQUgsUUFBSUksSUFBSjtBQUNBSixRQUFJSyxNQUFKLEdBQWEsWUFBVztBQUNwQixZQUFNVixPQUFPVyxLQUFLQyxLQUFMLENBQVdQLElBQUlRLFlBQWYsQ0FBYjtBQUNBVCxpQkFBU0osSUFBVDtBQUNILEtBSEQ7QUFJSCxDQVZEOztBQVlBTixTQUFTQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDQyxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQsVUFBQ0MsQ0FBRCxFQUFPO0FBQy9EQSxNQUFFQyxjQUFGO0FBQ0FDLGVBQVcsWUFBWCxFQUF5QixnQkFBUSxDQUVoQyxDQUZEO0FBR0gsQ0FMRCIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZXJ2ZXJVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcclxuXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGdldFJlcXVlc3QoJy9nZXROZXdzJywgKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IGdldFJlcXVlc3QgPSAocGF0aCwgY2FsbGJhY2spID0+IHtcclxuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4oJ2dldCcsIHNlcnZlclVybCArIHBhdGgpO1xyXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIHhoci5zZW5kKCk7XHJcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ2V0UmVxdWVzdCgnL2dldFByb2ZpdCcsIGRhdGEgPT4ge1xyXG5cclxuICAgIH0pXHJcbn0pOyJdfQ==