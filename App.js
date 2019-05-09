/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import Canvas from "react-native-canvas";


export default class App extends Component {
  // state = {
    // appState: AppState.currentState,
  // }

  // componentDidMount() {
  //   AppState.addEventListener('change', this._handleAppStateChange);
  // }

  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this._handleAppStateChange);
  // }


  // _handleAppStateChange = (nextAppState) => {
  //   if (
  //     this.state.appState.match(/inactive|background/) &&
  //     nextAppState === 'active'
  //   ) {
  //     console.log('App has come to the foreground!');
  //   }
  //   this.setState({appState: nextAppState});
  // };


  handleCanvas = (canvas) => {

    
    canvas.width = Dimensions.get('window').width;
    canvas.height = Dimensions.get('window').height;
    const ctx = canvas.getContext('2d');


    var raf;
    var running = false;

    var head = {
      x: 200,
      y: 50,
      vx: 0,
      vy: 0,
      radius: 30,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };


    var neck = {
      x: 200,
      xx: 80,
      y: 200,
      yy: 120,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };

    var cou = {
      x: 200,
      y: 130,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };

    var couf = {
      x: 200,
      y: 250,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };
    var eye_left = {
      x: 192.5,
      y: 42.5,
      vx: 0,
      vy: 0,
      radius: 3,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };

    var eye_right = {
      x: 207.5,
      y: 42.5,
      vx: 0,
      vy: 0,
      radius: 3,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };

    var mouth = {
      x: 200,
      y: 57.5,
      vx: 0,
      vy: 0,
      radius: 12,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI, false);
        ctx.closePath();
        ctx.fill();
      }



    };
    var body = {
      x: 200,
      xx: 130,
      y: 200,
      yy: 250,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };

    var foot_left = {
      x: 200,
      xx: 250,
      y: 165,
      yy: 285,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };

    var foot_left2 = {
      x: 165,
      xx: 285,
      y: 130,
      yy: 320,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };
    var foot_right = {
      x: 200,
      xx: 250,
      y: 240,
      yy: 285,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };
    var foot_right2 = {
      x: 240,
      xx: 285,
      y: 280,
      yy: 320,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };
    var ballf_right = {
      x: 280,
      y: 320,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };
    var ballfm_right = {
      x: 240,
      y: 285,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };
    var ballf_left = {
      x: 130,
      y: 320,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };
    var ballfm_left = {
      x: 165,
      y: 285,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };
    var arms_left = {
      x: 200,
      xx: 130,
      y: 160,
      yy: 155,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };
    var arms_left2 = {
      x: 160,
      xx: 155,
      y: 120,
      yy: 180,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };
    var arms_right = {
      x: 200,
      xx: 130,
      y: 240,
      yy: 155,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };
    var arms_right2 = {
      x: 240,
      xx: 155,
      y: 280,
      yy: 180,
      vx: 0,
      vy: 0,
      radius: 25,
      color: 'blue',
      draw: function () {

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.x, this.xx);
        ctx.lineTo(this.y, this.yy);
        ctx.stroke();
        ctx.closePath();
      }



    };
    var ball_left = {
      x: 120,
      y: 180,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };
    var ballm_left = {
      x: 160,
      y: 155,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };

    var ball_right = {
      x: 280,
      y: 180,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };
    var ballm_right = {
      x: 240,
      y: 155,
      vx: 0,
      vy: 0,
      radius: 10,
      color: 'blue',
      draw: function () {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }



    };
    function clear() {
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      clear();
      head.draw();
      eye_left.draw();
      eye_right.draw();
      mouth.draw();
      neck.draw();
      cou.draw();
      couf.draw();
      body.draw();
      ball_left.draw();
      ball_right.draw();
      ballm_left.draw();
      ballm_right.draw();
      arms_left.draw();
      arms_right.draw();
      arms_left2.draw();
      arms_right2.draw();
      foot_left.draw();
      foot_right.draw();
      foot_left2.draw();
      foot_right2.draw();
      ballf_left.draw();
      ballfm_left.draw();
      ballf_right.draw();
      ballfm_right.draw();
      //  ball.x += ball.vx;
      //  ball.y += ball.vy;

      //  if (ball.y > canvas.height || ball.y  < 0) {
      //   ball.y = 
      //}
      //if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
      // ball.vx = -ball.vx;
      //  }

      raf = window.requestAnimationFrame(draw);
    }
    //mousemove
    var mouseClicked = false, mouseReleased = true;

    // this.canvasRef.addEventListener("mousedown", onMouseClick, false);
    // this.canvasRef.addEventListener("mousemove", onMouseMove, false);
    // this.canvasRef.addEventListener("mouseup", Mouseup, false);

    function onMouseClick(e) {
      // alert('down ' );
      mouseClicked = !mouseClicked;
    }
    function Mouseup(e) {
      // alert('up ' );
      mouseClicked = !mouseClicked;
    }

    function onMouseMove(e) {
      if (mouseClicked) {
        clear();
        /* var xc = e.clientX - canvas.offsetLeft;
         var yc = e.clientY - canvas.offsetTop;
        var  f=Math.sqrt((xc-ball_left.x) ** 2 + (yc - ball_left.y) ** 2) <   ball_left.radius;*/


        // move arms_left2
        if (Math.sqrt((e.clientX - ball_left.x) ** 2 + (e.clientY - ball_left.y) ** 2) < ball_left.radius) { //
          if (ball_right.x != ball_left.x && (ball_right.y != ball_left.y || ball_right.y == ball_left.y)) {
            if (e.clientX != ball_right.x && e.clientY != ball_right.y) {
              ///&& e.clientX<= 155 && e.clientX >=120 
              ball_left.x = e.clientX;
              ball_left.y = e.clientY;
              arms_left2.y = e.clientX;
              arms_left2.yy = e.clientY;
            }
          }
        }

        // move arms_left

        if (Math.sqrt((e.clientX - ballm_left.x) ** 2 + (e.clientY - ballm_left.y) ** 2) < ballm_left.radius) { //
          if (ballm_right.x != ballm_left.x && (ballm_right.y != ballm_left.y || ballm_right.y == ballm_left.y)) {
            if (e.clientX != ballm_right.x && e.clientY != ballm_right.y) {
              ballm_left.x = e.clientX;
              ballm_left.y = e.clientY;
              arms_left2.x = e.clientX;
              arms_left2.xx = e.clientY;
              arms_left.y = e.clientX;
              arms_left.yy = e.clientY;
            }
          }
        }
        // move arms_right2
        if (Math.sqrt((e.clientX - ball_right.x) ** 2 + (e.clientY - ball_right.y) ** 2) < ball_right.radius) { //
          if (ball_right.x != ball_left.x && (ball_right.y != ball_left.y || ball_right.y == ball_left.y)) {
            if (e.clientX != ball_left.x && e.clientY != ball_left.y) {
              ///&& e.clientX<= 155 && e.clientX >=120 
              ball_right.x = e.clientX;
              ball_right.y = e.clientY;
              arms_right2.y = e.clientX;
              arms_right2.yy = e.clientY;
            }
          }
        }

        // move arms_right

        if (Math.sqrt((e.clientX - ballm_right.x) ** 2 + (e.clientY - ballm_right.y) ** 2) < ballm_right.radius) { //
          if (ballm_right.x != ballm_left.x && (ballm_right.y != ballm_left.y || ballm_right.y == ballm_left.y)) {
            if (e.clientX != ballm_left.x && e.clientY != ballm_left.y) {
              ballm_right.x = e.clientX;
              ballm_right.y = e.clientY;
              arms_right2.x = e.clientX;
              arms_right2.xx = e.clientY;
              arms_right.y = e.clientX;
              arms_right.yy = e.clientY;
            }
          }
        }


        // move foot_left2
        if (Math.sqrt((e.clientX - ballf_left.x) ** 2 + (e.clientY - ballf_left.y) ** 2) < ballf_left.radius) { //
          if (ballf_right.x != ballf_left.x && (ballf_right.y != ballf_left.y || ballf_right.y == ballf_left.y)) {
            if (e.clientX != ballf_right.x && e.clientY != ballf_right.y) {
              ///&& e.clientX<= 155 && e.clientX >=120 
              ballf_left.x = e.clientX;
              ballf_left.y = e.clientY;
              foot_left2.y = e.clientX;
              foot_left2.yy = e.clientY;
            }
          }
        }

        // move arms_left

        if (Math.sqrt((e.clientX - ballfm_left.x) ** 2 + (e.clientY - ballfm_left.y) ** 2) < ballfm_left.radius) { //
          if (ballfm_right.x != ballfm_left.x && (ballfm_right.y != ballfm_left.y || ballfm_right.y == ballfm_left.y)) {
            if (e.clientX != ballfm_right.x && e.clientY != ballfm_right.y) {
              ballfm_left.x = e.clientX;
              ballfm_left.y = e.clientY;
              foot_left2.x = e.clientX;
              foot_left2.xx = e.clientY;
              foot_left.y = e.clientX;
              foot_left.yy = e.clientY;
            }
          }
        }

        // move foot_right2
        if (Math.sqrt((e.clientX - ballf_right.x) ** 2 + (e.clientY - ballf_right.y) ** 2) < ballf_right.radius) { //
          if (ballf_right.x != ballf_left.x && (ballf_right.y != ballf_left.y || ballf_right.y == ballf_left.y)) {
            if (e.clientX != ballf_left.x && e.clientY != ballf_left.y) {
              ///&& e.clientX<= 155 && e.clientX >=120 
              ballf_right.x = e.clientX;
              ballf_right.y = e.clientY;
              foot_right2.y = e.clientX;
              foot_right2.yy = e.clientY;
            }
          }
        }

        // move foot_right

        if (Math.sqrt((e.clientX - ballfm_right.x) ** 2 + (e.clientY - ballfm_right.y) ** 2) < ballfm_right.radius) { //
          if (ballfm_right.x != ballfm_left.x && (ballfm_right.y != ballfm_left.y || ballfm_right.y == ballfm_left.y)) {
            if (e.clientX != ballfm_left.x && e.clientY != ballfm_left.y) {
              ballfm_right.x = e.clientX;
              ballfm_right.y = e.clientY;
              foot_right2.x = e.clientX;
              foot_right2.xx = e.clientY;
              foot_right.y = e.clientX;
              foot_right.yy = e.clientY;
            }
          }
        }





        //move cou
        if (Math.sqrt((e.clientX - cou.x) ** 2 + (e.clientY - cou.y) ** 2) < cou.radius) {
          if (cou.y != couf.y && (cou.x != couf.x || cou.x == couf.x)) { //alert('down ' );
            if (e.clientX != couf.x && e.clientY != couf.y) {
              cou.x = e.clientX;
              cou.y = e.clientY;
              neck.y = e.clientX;
              neck.yy = e.clientY;
              body.x = e.clientX;
              body.xx = e.clientY;
              arms_left.x = e.clientX;
              arms_left.xx = e.clientY;
              arms_right.x = e.clientX;
              arms_right.xx = e.clientY;
            }
          }
        }

        //move couf
        if (Math.sqrt((e.clientX - couf.x) ** 2 + (e.clientY - couf.y) ** 2) < couf.radius) {
          if (cou.y != couf.y && (cou.x != couf.x || cou.x == couf.x)) { //alert('down ' );
            if (e.clientX != cou.x && e.clientY != cou.y) {
              couf.x = e.clientX;
              couf.y = e.clientY;
              body.y = e.clientX;
              body.yy = e.clientY;
              foot_left.x = e.clientX;
              foot_left.xx = e.clientY;
              foot_right.x = e.clientX;
              foot_right.xx = e.clientY;
            }
          }
        }

        //move head
        if (Math.sqrt((e.clientX - head.x) ** 2 + (e.clientY - head.y) ** 2) < head.radius) {
          if (head.y != cou.y && (head.x != cou.x || head.x == cou.x)) {
            if (e.clientX != cou.x && e.clientY != cou.y) {
              head.x = e.clientX;
              head.y = e.clientY;
              eye_left.x = head.x - 7.5;
              eye_left.y = head.y - 7.5;
              eye_right.x = head.x + 7.5;
              eye_right.y = head.y - 7.5;
              mouth.x = head.x;
              mouth.y = head.y + 7.5;
              neck.x = e.clientX;
              neck.xx = e.clientY + 20;


            }
          }
        }
        head.draw();
        eye_left.draw();
        eye_right.draw();
        mouth.draw();
        neck.draw();
        cou.draw();
        couf.draw();
        body.draw();
        ball_left.draw();
        ball_right.draw();
        ballm_left.draw();
        ballm_right.draw();
        arms_left.draw();
        arms_right.draw();
        arms_left2.draw();
        arms_right2.draw();
        foot_left.draw();
        foot_right.draw();
        foot_left2.draw();
        foot_right2.draw();
        ballf_left.draw();
        ballfm_left.draw();
        ballf_right.draw();
        ballfm_right.draw();
      }

    }



    /*canvas.addEventListener('click',function(e){
     if (!running) {
        var xc = e.clientX - canvas.offsetLeft;
        var yc = e.clientY - canvas.offsetTop;
        alert('click on circle: ' + xc  );
        raf = window.requestAnimationFrame(draw);
        running = true;
      }
    });*/
    // alert(JSON.stringify(canvas));
    // canvas.current.addEventListener("mouseout",function(e){
    //   window.cancelAnimationFrame(raf);
    // running = false;
    // });



    head.draw();
    eye_left.draw();
    eye_right.draw();
    mouth.draw();
    neck.draw();
    cou.draw();
    couf.draw();
    body.draw();
    ball_left.draw();
    ball_right.draw();
    ballm_left.draw();
    ballm_right.draw();
    arms_left.draw();
    arms_right.draw();
    arms_left2.draw();
    arms_right2.draw();
    foot_left.draw();
    foot_right.draw();
    foot_left2.draw();
    foot_right2.draw();
    ballf_left.draw();
    ballfm_left.draw();
    ballf_right.draw();
    ballfm_right.draw();

  }
  render() {
    return (
        <Canvas style={styles.container} ref={this.handleCanvas} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
