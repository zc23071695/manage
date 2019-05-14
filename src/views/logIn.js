import React from 'react'
import './css/dengru.css'
import './css/common.css'
// import 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'
// import 'https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css'
import './css/index.css'
class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  render() {
    return (
      <html lang="en">
        <body>
          <div id="header">
            <div className="header_loog">凡客 vancl</div>
            <a href="X" className="header_right">
              帮助
            </a>
          </div>
          <div>
            <div id="mian">
              <div className="mian_left">
                <div className="tupian" />
                <p>
                  <span> 凡客vancl </span>| 互联网快时尚
                </p>
              </div>
              <div className="mian_dengru">
                <div className="mian_top">
                  <p>凡客vancl登入</p>
                  <p>
                    没有账号免费
                    <a href="zhuche.html">注册</a>
                  </p>
                </div>
                <div className="dengru">
                  <div className="dengru_top">
                    <p className="putpng">普通登入</p>
                    <p className="kuaishu">快速登入</p>
                  </div>

                  <div className="dengru_box">
                    <form className="form_box" onsubmit="return false">
                      <input
                        type="text"
                        id="form-control"
                        className="fist"
                        name="username"
                        placeholder="请输入用户名"
                      />
                      <br />
                      <p className="yanz" />
                      <input
                        type="password"
                        id="form-control"
                        className="last"
                        name="password"
                        placeholder="请输入密码"
                      />
                      <br />
                      <p className="yanz2" />
                      <button name="submit" type="submit" className="success">
                        确定
                      </button>
                    </form>
                  </div>
                  <div className="kuaishu_dengru">
                    <form method="GET" className="kuaishu_dengru_box">
                      <input
                        type="text"
                        className="phone"
                        name="phone"
                        placeholder="请输入手机号"
                      />
                      <input
                        type="text"
                        className="code"
                        placeholder="请输入验证码"
                      />
                      <input type="text" className="get_code" />
                      <input
                        type="text"
                        className="phone"
                        name="phone"
                        placeholder="请输入手机号验证码"
                      />
                      <button name="submit" type="submit" className="success">
                        确定
                      </button>
                    </form>
                  </div>
                  <div className="dengru_foot">
                    <p>使用合约网站账号登入凡客</p>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="myModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 className="modal-title" id="myModalLabel">
                        提交成功
                      </h4>
                    </div>
                    <div className="modal-body">即将跳转...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                      >
                        取消
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary b-commit"
                      >
                        确定
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="footArea">
            <div className="footBottom">
              <div className="footBottomTab">
                <p>
                  {' '}
                  Copyright 2007 - 2019 vancl.com All Rights Reserved
                  京ICP证100557号 京公网安备11011502002400号
                  出版物经营许可证新出发京批字第直110138号
                </p>

                <p> 凡客诚品（北京）科技有限公司</p>
              </div>
            </div>
            <span className="blank20" />
          </div>
        </body>
      </html>
    )
  }
}
export default LogIn
