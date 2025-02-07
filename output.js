//Fri Feb 07 2025 16:06:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
require("global-agent/bootstrap");
const _0x4a055a = require("axios");
async function _0x23c533() {
  try {
    console.log("🚀代理地址", proxyUrl);
    global.GLOBAL_AGENT.HTTP_PROXY = proxyUrl;
    console.log("🚀启动global-agent中");
  } catch (_0x207470) {
    console.error("获取代理地址失败:", _0x207470);
  }
}
async function _0x3b2a2e() {
  try {
    {
      const _0xf3ea1f = await _0x4a055a.get("https://httpbin.org/ip");
      console.log("代理请求成功:", _0xf3ea1f.data.origin);
      return true;
    }
  } catch (_0x5855fe) {
    console.error("代理请求失败:", _0x5855fe.message);
    return false;
  }
}
const _0x27faa1 = require("fs"),
  _0x41641d = require("js-yaml");
async function _0xfe4531() {
  try {
    {
      const _0x3b8d29 = _0x27faa1.readFileSync(filePath, "utf8"),
        _0x4b6272 = _0x41641d.load(_0x3b8d29),
        _0x1ac527 = _0x4b6272?.["accounts"] || [];
      if (_0x1ac527.length === 0) return console.log("未找到有效的app账号数据，跳过处理"), [];
      const _0x1a58b4 = [];
      for (let _0xc2200d = 0; _0xc2200d < _0x1ac527.length; _0xc2200d++) {
        {
          const _0x1f9031 = _0x1ac527[_0xc2200d],
            _0x1336df = _0x1f9031.code?.["match"](/(?:[?&])code=([A-Za-z0-9._%-]+)/);
          if (!_0x1336df) {
            {
              console.error("第 " + (_0xc2200d + 1) + " 号app账号没有有效的 code 参数，跳过");
              continue;
            }
          }
          const _0x458bc7 = _0x1336df[1];
          if (!_0x1f9031.refresh_token) {
            console.log("开始登录第 " + (_0xc2200d + 1) + " 号app账号");
            try {
              {
                const _0x379055 = await _0x4c1b17(_0x458bc7);
                _0x1f9031.refresh_token = _0x379055;
                console.log("第 " + (_0xc2200d + 1) + " 号app账号获取到新的刷新令牌");
              }
            } catch (_0x30ce50) {
              console.error("第 " + (_0xc2200d + 1) + " 号app账号获取刷新令牌失败: " + _0x30ce50);
              continue;
            }
          }
          if (_0x1f9031.refresh_token) try {
            const {
              access_token: _0x4fa5d7,
              refresh_token: _0x42c5fe
            } = await _0x1b34cb(_0x1f9031.refresh_token);
            _0x1f9031.access_token = _0x4fa5d7;
            _0x42c5fe && (_0x1f9031.refresh_token = _0x42c5fe);
            console.log("第 " + (_0xc2200d + 1) + " 号app账号获取到登录令牌");
          } catch (_0x1adcc6) {
            {
              console.error("第 " + (_0xc2200d + 1) + " 号app账号获取登录令牌失败: " + _0x1adcc6);
              continue;
            }
          }
          _0x1f9031.access_token && _0x1a58b4.push(_0x1f9031);
        }
      }
      console.log("有效app账号数：", _0x1a58b4.length);
      if (_0x1a58b4.length > 0) await _0x2199a4(filePath, _0x1a58b4), console.log("YAML 文件已更新");else {
        console.log("没有有效app账号，跳过 YAML 文件更新");
      }
      return _0x1a58b4;
    }
  } catch (_0x18089a) {
    console.error("读取或解析 " + filePath + " 文件失败:", _0x18089a);
    throw _0x18089a;
  }
}
async function _0x4c1b17(_0x218a01) {
  const _0x36b4bd = "https://login.live.com/oauth20_token.srf?client_id=0000000040170455&code=" + _0x218a01 + "&redirect_uri=https://login.live.com/oauth20_desktop.srf&grant_type=authorization_code";
  try {
    const _0x3dd00b = await _0x4a055a.get(_0x36b4bd);
    return _0x3dd00b.data.refresh_token;
  } catch (_0x245332) {
    {
      console.error("获取 刷新令牌 失败: " + _0x245332);
      throw _0x245332;
    }
  }
}
async function _0x1b34cb(_0x308cdd) {
  const _0x1abed4 = "https://login.live.com/oauth20_token.srf?client_id=0000000040170455&refresh_token=" + _0x308cdd + "&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&grant_type=REFRESH_TOKEN";
  try {
    {
      const _0x53074d = await _0x4a055a.get(_0x1abed4);
      return {
        "access_token": _0x53074d.data.access_token,
        "refresh_token": _0x53074d.data.refresh_token || _0x308cdd
      };
    }
  } catch (_0x3264b0) {
    console.error("获取 登录令牌 失败: " + _0x3264b0);
    throw _0x3264b0;
  }
}
async function _0x2199a4(_0x213959, _0x5ad8a2) {
  try {
    const _0x4b0230 = {
        "accounts": _0x5ad8a2
      },
      _0x48ef3c = _0x41641d.dump(_0x4b0230, {
        "lineWidth": 1000000
      });
    _0x27faa1.writeFileSync(_0x213959, _0x48ef3c, "utf8");
  } catch (_0x45bf37) {
    console.error("更新 " + _0x213959 + " 文件失败:", _0x45bf37);
    throw _0x45bf37;
  }
}
const _0xec55e7 = process.env[Account_name] ? process.env[Account_name].split("\n").map(_0x3fbde9 => _0x3fbde9.trim()).filter(_0x3899be => _0x3899be) : [];
if (_0xec55e7.length === 0) throw new Error("未检测到任何账号，请在环境变量中设置 " + Account_name);
console.log("web账号数：", _0xec55e7.length);
function _0x396ae4(_0x85f620) {
  const _0xfe1d47 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let _0x3be875 = "";
  for (let _0x1f8b45 = 0; _0x1f8b45 < _0x85f620; _0x1f8b45++) {
    _0x3be875 += _0xfe1d47.charAt(Math.floor(Math.random() * _0xfe1d47.length));
  }
  return _0x3be875;
}
async function _0x427b2a() {
  const _0x5bf4d5 = ["BaiduHot", "ToutiaoHot", "DouYinHot", "ZhihuHot", "BiliBliHot", "WeiBoHot", "SoGouHot", "BaiduTieBaHot", "SoHot"],
    _0x3f2380 = process.env.apikey;
  let _0x195009 = [];
  _0x30b7f2(_0x5bf4d5);
  while (_0x195009.length === 0) {
    for (const _0x1b9ab0 of _0x5bf4d5) {
      try {
        let _0x572b74 = "https://api.gumengya.com/Api/" + _0x1b9ab0;
        _0x3f2380 && (_0x572b74 += "&appkey=" + _0x3f2380);
        const _0x2803ee = await _0x4a055a.get(_0x572b74);
        _0x2803ee.data && _0x2803ee.data.data && (_0x195009 = _0x195009.concat(_0x2803ee.data.data.map(_0xa493b8 => _0xa493b8.title)));
      } catch (_0x4000d4) {
        console.warn("请求失败: " + _0x1b9ab0 + ", 错误: " + _0x4000d4);
      }
    }
    _0x195009.length === 0 && (console.warn("未能获取到关键词，重试中..."), await new Promise(_0x11cf79 => setTimeout(_0x11cf79, 3000)));
  }
  const _0x4cad87 = [...new Set(_0x195009)];
  return _0x4cad87;
}
function _0x30b7f2(_0x339eee) {
  for (let _0x1a5752 = _0x339eee.length - 1; _0x1a5752 > 0; _0x1a5752--) {
    const _0x504fd4 = Math.floor(Math.random() * (_0x1a5752 + 1));
    [_0x339eee[_0x1a5752], _0x339eee[_0x504fd4]] = [_0x339eee[_0x504fd4], _0x339eee[_0x1a5752]];
  }
}
async function _0x576871(_0x1a4b5e, _0x205209, _0x4935a5, _0x3a3b83) {
  const _0x1502fe = "https://cn.bing.com/search",
    _0x4e2c74 = {
      "q": _0x1a4b5e,
      "qs": "n",
      "form": _0x396ae4(4),
      "sp": "-1",
      "lq": "0",
      "pq": _0x1a4b5e,
      "sc": "9-16",
      "sk": "",
      "cvid": _0x396ae4(32),
      "ghsh": "0",
      "ghacc": "0",
      "ghpl": ""
    },
    _0x33c8a0 = {
      "User-Agent": _0x205209,
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "priority": "u=0, i",
      "Cookie": _0x4935a5
    };
  try {
    {
      const _0x343529 = await _0x4a055a.get(_0x1502fe, {
        "params": _0x4e2c74,
        "headers": _0x33c8a0
      });
    }
  } catch (_0x4e9b6b) {
    console.error("[账号 " + _0x3a3b83 + "] 搜索请求失败: " + _0x4e9b6b);
  }
}
async function _0x584754(_0x589aec, _0x13db39) {
  const _0x27a128 = "https://cn.bing.com/rewardsapp/reportActivity",
    _0x44692c = {
      "Cookie": _0x589aec,
      "User-Agent": PC_USER_AGENT
    };
  try {
    const _0x1972fb = await _0x4a055a.get(_0x27a128, {
        "headers": _0x44692c
      }),
      _0x157c8b = _0x1972fb.data.match(/"RewardsBalance":(\d+)/);
    if (_0x157c8b) return parseInt(_0x157c8b[1], 10);else {
      console.warn("[账号 " + _0x13db39 + "] 未找到积分信息");
      return null;
    }
  } catch (_0x467af5) {
    console.error("[账号 " + _0x13db39 + "] 获取积分失败: " + _0x467af5);
    return null;
  }
}
const _0x3b7202 = require("cheerio");
async function _0x2cbd63(_0x4e298b) {
  const _0x176181 = "https://rewards.bing.com",
    _0x4fad72 = {
      "ref": "rewardspanel"
    },
    _0x1c7c1b = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x4e298b
    };
  try {
    {
      const _0x8c9a11 = await _0x4a055a.get(_0x176181, {
          "params": _0x4fad72,
          "headers": _0x1c7c1b
        }),
        _0x3d0043 = _0x3b7202.load(_0x8c9a11.data),
        _0xd21d6 = _0x3d0043("input[name=\"__RequestVerificationToken\"]");
      if (_0xd21d6.length > 0) return _0xd21d6.val();else {
        console.error("__RequestVerificationToken not found.");
        return null;
      }
    }
  } catch (_0x1d4fdd) {
    console.error("获取 Token 失败: " + _0x1d4fdd);
    return null;
  }
}
async function _0x5320cb(_0x3879ff, _0x577290, _0x4aa1fb, _0x508865) {
  console.log("开始执行任务 " + _0x3879ff);
  const _0x18fc80 = "https://rewards.bing.com/api/reportactivity",
    _0x358d23 = {
      "X-Requested-With": "XMLHttpRequest"
    },
    _0x3cf4cf = new URLSearchParams({
      "id": _0x3879ff,
      "hash": _0x577290,
      "__RequestVerificationToken": _0x508865
    }).toString(),
    _0xb0331d = {
      "User-Agent": PC_USER_AGENT,
      "Content-Type": "application/x-www-form-urlencoded",
      "Referer": "https://rewards.bing.com/",
      "Cookie": _0x4aa1fb
    };
  try {
    const _0x336312 = await _0x4a055a.post(_0x18fc80, _0x3cf4cf, {
      "params": _0x358d23,
      "headers": _0xb0331d
    });
    if (_0x336312.status !== 200) {
      {
        console.error("请求失败，HTTP 状态码: " + _0x336312.status);
        return;
      }
    }
    const _0x47ef6f = _0x336312.data,
      _0xd50cef = _0x47ef6f.balance || null;
    if (_0xd50cef !== null) return console.log("当前积分：" + _0xd50cef), true;else {
      console.warn("未能从响应中获取积分信息");
    }
  } catch (_0x16c127) {
    console.error("请求失败: " + _0x16c127);
  }
}
async function _0x2f6334(_0x2b6ab7) {
  const _0x395a41 = "https://rewards.bing.com/api/getuserinfo",
    _0x374e9a = {
      "type": "1",
      "X-Requested-With": "XMLHttpRequest",
      "_": Date.now()
    },
    _0x28aab1 = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x2b6ab7
    };
  try {
    const _0x270bc2 = await _0x4a055a.get(_0x395a41, {
      "params": _0x374e9a,
      "headers": _0x28aab1
    });
    return _0x270bc2.data;
  } catch (_0x20dd0c) {
    console.error("获取搜索任务进度失败，错误: " + _0x20dd0c);
    return null;
  }
}
async function _0x22d984(_0x582b5b, _0x453425, _0x3969a7) {
  console.log("开始处理账号 " + _0x582b5b);
  let _0x251dcf = "",
    _0x727292;
  try {
    _0x727292 = await _0x3969a7(_0x453425);
    if (!_0x727292) {
      console.warn("跳过当前账号 " + _0x582b5b + " 任务，因为账号失效。");
      _0x251dcf += "账号 " + _0x582b5b + " 失效\n";
      QLAPI.notify("账号失效", "当前账号 " + _0x582b5b + "失效。");
      return;
    }
  } catch (_0x2909c0) {
    console.error("账号 " + _0x582b5b + " 获取 token 失败，错误: " + _0x2909c0);
    return;
  }
  const _0x462c96 = "https://rewards.bing.com/api/getuserinfo",
    _0x3d34f2 = {
      "type": "1",
      "X-Requested-With": "XMLHttpRequest",
      "_": Date.now()
    },
    _0x4072ea = {
      "User-Agent": PC_USER_AGENT,
      "Cookie": _0x453425
    };
  let _0xe7a971;
  try {
    const _0x5a249f = await _0x4a055a.get(_0x462c96, {
      "params": _0x3d34f2,
      "headers": _0x4072ea
    });
    _0xe7a971 = _0x5a249f.data;
  } catch (_0x17f9e0) {
    {
      console.error("账号 " + _0x582b5b + " 获取每日任务失败，错误: " + _0x17f9e0);
      return;
    }
  }
  const _0x521e5f = new Date().toLocaleDateString("en-US", {
    "month": "2-digit",
    "day": "2-digit",
    "year": "numeric"
  });
  let _0x3c72d4 = 0,
    _0x3cd3b1 = 0;
  const _0x5e1922 = _0xe7a971.dashboard.dailySetPromotions[_0x521e5f] || [];
  for (const _0x707044 of _0x5e1922) {
    {
      _0x3cd3b1++;
      const {
        offerId: _0x5c7a55,
        title: _0x4d6bbc,
        hash: _0x4bb454,
        complete: _0x259ecf,
        pointProgressMax: _0x36660d,
        attributes: _0x471bdc
      } = _0x707044;
      console.log("------------------------");
      console.log("每日任务");
      console.log("[账号 " + _0x582b5b + "]");
      console.log("Name: " + _0x5c7a55);
      console.log("题目: " + _0x4d6bbc);
      console.log("Hash: " + _0x4bb454);
      console.log("是否完成: " + _0x259ecf);
      console.log("奖励积分: " + _0x36660d);
      if (_0x471bdc?.["is_unlocked"] === "False") console.log("任务未解锁");else {
        if (!_0x259ecf) {
          try {
            const _0x50f17e = await _0x5320cb(_0x5c7a55, _0x4bb454, _0x453425, _0x727292);
            _0x50f17e && _0x3c72d4++;
          } catch (_0x29d570) {
            console.error("账号 " + _0x582b5b + " 执行任务失败，错误: " + _0x29d570);
            continue;
          }
        } else {
          _0x3c72d4++;
          console.log("任务已完成");
        }
      }
      const _0x688327 = Math.floor(Math.random() * 51) + 250;
      console.log("[账号 " + _0x582b5b + "] 等待 " + _0x688327 + " 秒");
      await new Promise(_0x464231 => setTimeout(_0x464231, _0x688327 * 1000));
    }
  }
  let _0x32d96e = 0,
    _0x5b8584 = 0;
  for (const _0x7fe29c of _0xe7a971.dashboard.morePromotions) {
    if (_0x7fe29c.pointProgressMax === 0) continue;
    _0x5b8584++;
    const {
      offerId: _0x2c3b87,
      title: _0x1f8106,
      hash: _0x3fdf6a,
      complete: _0x3f7ef9,
      pointProgressMax: _0x4c94f2,
      attributes: _0x351c3e
    } = _0x7fe29c;
    console.log("------------------------");
    console.log("更多任务");
    console.log("[账号 " + _0x582b5b + "]");
    console.log("Name: " + _0x2c3b87);
    console.log("题目: " + _0x1f8106);
    console.log("Hash: " + _0x3fdf6a);
    console.log("是否完成: " + _0x3f7ef9);
    console.log("奖励积分: " + _0x4c94f2);
    if (_0x351c3e?.["is_unlocked"] === "False") console.log("任务未解锁");else {
      if (!_0x3f7ef9) try {
        {
          const _0x4c6e2f = await _0x5320cb(_0x2c3b87, _0x3fdf6a, _0x453425, _0x727292);
          _0x4c6e2f && _0x32d96e++;
        }
      } catch (_0x324229) {
        console.error("账号 " + _0x582b5b + " 执行任务失败，错误: " + _0x324229);
        continue;
      } else _0x32d96e++, console.log("任务已完成");
    }
    const _0x2b4720 = Math.floor(Math.random() * 51) + 250;
    console.log("[账号 " + _0x582b5b + "] 等待 " + _0x2b4720 + " 秒");
    await new Promise(_0x1d344f => setTimeout(_0x1d344f, _0x2b4720 * 1000));
  }
  const _0x48d3c6 = await _0x2f6334(_0x453425);
  if (_0x48d3c6) {
    const _0x12d3e2 = _0x48d3c6.dashboard.userStatus.counters,
      _0x3ffff4 = _0x12d3e2.pcSearch ? _0x12d3e2.pcSearch[0].pointProgress : 0,
      _0x37e779 = _0x12d3e2.pcSearch ? _0x12d3e2.pcSearch[0].pointProgressMax : 0,
      _0x2e6657 = _0x12d3e2.mobileSearch ? _0x12d3e2.mobileSearch[0].pointProgress : 0,
      _0x2a7bed = _0x12d3e2.mobileSearch ? _0x12d3e2.mobileSearch[0].pointProgressMax : 0;
    _0x251dcf += "账号 " + _0x582b5b + " PC 搜索任务进度: " + _0x3ffff4 + "/" + _0x37e779 + "\n";
    _0x251dcf += "账号 " + _0x582b5b + " 移动搜索任务进度: " + _0x2e6657 + "/" + _0x2a7bed + "\n";
  }
  _0x251dcf += "账号 " + _0x582b5b + " 完成每日任务 " + _0x3c72d4 + "/" + _0x3cd3b1 + " 个\n";
  _0x251dcf += "账号 " + _0x582b5b + " 完成临时任务 " + _0x32d96e + "/" + _0x5b8584 + " 个\n";
  const _0x2c4e58 = await _0x584754(_0x453425, _0x582b5b);
  _0x251dcf += "账号 " + _0x582b5b + " 剩余积分 " + _0x2c4e58 + "\n";
  return _0x251dcf;
}
async function _0x4b9850(_0x3bb642, _0x29a493, _0x1d9b34, _0x3be108, _0xbe05ff) {
  const _0x4e29fb = Math.random() * 99000 + 1000;
  await new Promise(_0x5ecf9f => setTimeout(_0x5ecf9f, _0x4e29fb));
  const _0x3e9046 = await _0x1d9b34();
  console.log("[账号 " + _0x3bb642 + "] 开始处理...");
  const _0x3d93a8 = new Set();
  let _0x542437 = await _0x3be108(_0x29a493, _0x3bb642);
  if (_0x542437 === null) {
    {
      console.error("[账号 " + _0x3bb642 + "] 无法获取初始积分，跳过此账号");
      return;
    }
  }
  console.log("[账号 " + _0x3bb642 + "] 初始积分: " + _0x542437);
  let _0x1cd9b7 = 0;
  const _0xf62931 = 5;
  while (true) {
    const _0x10eed8 = _0x3e9046.filter(_0x3fec1f => !_0x3d93a8.has(_0x3fec1f));
    if (_0x10eed8.length === 0) {
      console.log("[账号 " + _0x3bb642 + "] 所有关键词已用完");
      break;
    }
    searchType = "PC设备";
    userAgent = PC_USER_AGENT;
    const _0x259b83 = _0x10eed8[Math.floor(Math.random() * _0x10eed8.length)];
    _0x3d93a8.add(_0x259b83);
    console.log("[账号 " + _0x3bb642 + "] 执行 " + searchType + " 搜索: " + _0x259b83);
    await _0xbe05ff(_0x259b83, userAgent, _0x29a493, _0x3bb642);
    const _0x56e40d = await _0x3be108(_0x29a493, _0x3bb642);
    if (_0x56e40d === null) {
      console.error("[账号 " + _0x3bb642 + "] 无法获取当前积分，跳过此账号");
      break;
    }
    _0x56e40d > _0x542437 ? (console.log("[账号 " + _0x3bb642 + "] " + searchType + " 积分增加，继续使用"), _0x542437 = _0x56e40d, _0x1cd9b7 = 0) : (_0x1cd9b7++, console.log("[账号 " + _0x3bb642 + "] " + searchType + " 未增加积分，尝试次数: " + _0x1cd9b7));
    if (_0x1cd9b7 >= _0xf62931) {
      console.log("[账号 " + _0x3bb642 + "] " + searchType + " 多次未增加积分，结束任务");
      const _0x57f7df = Math.floor(Math.random() * 51) + 200;
      console.log("[账号 " + _0x3bb642 + "] 等待 " + _0x57f7df + " 秒");
      await new Promise(_0x523dcf => setTimeout(_0x523dcf, _0x57f7df * 1000));
      break;
    }
    const _0xdfa934 = Math.floor(Math.random() * 51) + 200;
    console.log("[账号 " + _0x3bb642 + "] 等待 " + _0xdfa934 + " 秒");
    await new Promise(_0x193667 => setTimeout(_0x193667, _0xdfa934 * 1000));
  }
  _0x1cd9b7 = 0;
  while (true) {
    {
      const _0x218aec = _0x3e9046.filter(_0x38842d => !_0x3d93a8.has(_0x38842d));
      if (_0x218aec.length === 0) {
        console.log("[账号 " + _0x3bb642 + "] 所有关键词已用完");
        break;
      }
      searchType = "手机设备";
      userAgent = MOBILE_USER_AGENT;
      const _0x8a9096 = _0x218aec[Math.floor(Math.random() * _0x218aec.length)];
      _0x3d93a8.add(_0x8a9096);
      console.log("[账号 " + _0x3bb642 + "] 执行 " + searchType + " 搜索: " + _0x8a9096);
      await _0xbe05ff(_0x8a9096, userAgent, _0x29a493, _0x3bb642);
      const _0x9bca8d = await _0x3be108(_0x29a493, _0x3bb642);
      if (_0x9bca8d === null) {
        {
          console.error("[账号 " + _0x3bb642 + "] 无法获取当前积分，跳过此账号");
          break;
        }
      }
      _0x9bca8d > _0x542437 ? (console.log("[账号 " + _0x3bb642 + "] " + searchType + " 积分增加，继续使用"), _0x542437 = _0x9bca8d, _0x1cd9b7 = 0) : (_0x1cd9b7++, console.log("[账号 " + _0x3bb642 + "] " + searchType + " 未增加积分，尝试次数: " + _0x1cd9b7));
      if (_0x1cd9b7 >= _0xf62931) {
        {
          console.log("[账号 " + _0x3bb642 + "] " + searchType + " 多次未增加积分，结束任务");
          break;
        }
      }
      const _0x1c5dbf = Math.floor(Math.random() * 51) + 200;
      console.log("[账号 " + _0x3bb642 + "] 等待 " + _0x1c5dbf + " 秒");
      await new Promise(_0x5efe9b => setTimeout(_0x5efe9b, _0x1c5dbf * 1000));
    }
  }
}
const _0x2655fa = async (_0x57e6a3, _0x71c5be) => {
    let _0x49f1b8 = "";
    const _0x4068d1 = "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
      _0x4fd37c = new Date().toISOString().split("T")[0],
      _0x54d397 = {
        "amount": 1,
        "attributes": {
          "offerid": "Gamification_Sapphire_DailyCheckIn",
          "date": _0x4fd37c,
          "signIn": false,
          "timezoneOffset": "08:00:00"
        },
        "id": "",
        "type": 101,
        "country": "cn",
        "risk_context": {},
        "channel": "SAAndroid"
      },
      _0x152c05 = {
        "Content-Type": "application/json",
        "User-Agent": MOBILE_USER_AGENT,
        "authorization": "Bearer " + _0x71c5be
      };
    try {
      {
        const _0x1d8362 = await _0x4a055a.post(_0x4068d1, _0x54d397, {
            "headers": _0x152c05
          }),
          _0x3b7c00 = _0x1d8362.data;
        if (_0x3b7c00.response && _0x3b7c00.response.balance !== undefined) {
          const _0xa72857 = _0x3b7c00.response.balance;
          console.log("app账号 " + _0x57e6a3 + " 签到成功 当前余额: " + _0xa72857);
          _0x49f1b8 += "app账号 " + _0x57e6a3 + " 签到成功 当前余额: " + _0xa72857 + "\n";
          return _0x49f1b8;
        } else console.log("无法获取余额");
      }
    } catch (_0x205e24) {
      console.error("签到失败: ", _0x205e24);
    }
  },
  _0x4830e3 = require("crypto");
function _0x1f662c() {
  const _0x11417d = _0x4830e3.randomBytes(64);
  return _0x11417d.toString("hex");
}
async function _0x475b85(_0x26fdd3) {
  const _0x19d74b = "https://prod.rewardsplatform.microsoft.com/dapi/me",
    _0x16e8b2 = new URLSearchParams({
      "channel": "SAAndroid",
      "options": "613"
    }),
    _0x35347d = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + _0x26fdd3
    };
  try {
    {
      const _0x546117 = await _0x4a055a.get(_0x19d74b, {
          "params": _0x16e8b2,
          "headers": _0x35347d
        }),
        _0x4994e0 = _0x546117.data,
        _0x52dcfa = _0x4994e0.response.promotions;
      let _0x5d369f = {
        "max": 1,
        "progress": 0
      };
      if (_0x52dcfa) for (const _0x566bca of _0x52dcfa) {
        {
          if (_0x566bca.attributes.offerid === "ENUS_readarticle3_30points") {
            _0x5d369f = {
              "max": Number(_0x566bca.attributes.max),
              "progress": Number(_0x566bca.attributes.progress)
            };
            break;
          }
        }
      }
      return _0x5d369f;
    }
  } catch (_0x41a097) {
    console.error("请求失败:", _0x41a097);
    return {
      "max": 1,
      "progress": 0
    };
  }
}
async function _0x3d90c7(_0x3fd35b, _0x3f8e4c) {
  let _0x218c57 = "";
  const _0x49b471 = "https://prod.rewardsplatform.microsoft.com/dapi/me/activities";
  let _0x33c487 = 0,
    _0x555486 = 0;
  const _0x194186 = {
    "Content-Type": "application/json",
    "User-Agent": MOBILE_USER_AGENT,
    "authorization": "Bearer " + _0x3f8e4c
  };
  for (let _0x4a9b91 = 0; _0x4a9b91 < 15; _0x4a9b91++) {
    const _0x167b8a = {
      "amount": 1,
      "country": "cn",
      "id": _0x1f662c(),
      "type": 101,
      "attributes": {
        "offerid": "ENUS_readarticle3_30points"
      }
    };
    try {
      {
        const _0x544653 = await _0x4a055a.post(_0x49b471, _0x167b8a, {
            "headers": _0x194186
          }),
          _0x35e3b9 = _0x544653.data;
        if (_0x35e3b9 && _0x35e3b9.response) {
          const _0x4783b2 = _0x35e3b9.response.balance || 0;
          console.log("[app账号 " + _0x3fd35b + "] 阅读任务第 " + (_0x4a9b91 + 1) + " 次执行成功 当前余额: " + _0x4783b2);
          _0x4783b2 === _0x33c487 ? _0x555486++ : _0x555486 = 0;
          if (_0x555486 >= 3) {
            console.log("[app账号 " + _0x3fd35b + "] 积分连续三次没有变化");
            break;
          }
          _0x33c487 = _0x4783b2;
        } else console.error("[app账号 " + _0x3fd35b + "] 阅读任务 " + (_0x4a9b91 + 1) + " 执行失败，未返回预期的响应数据");
        const _0x49efe6 = Math.floor(Math.random() * 51) + 250;
        console.log("[app账号 " + _0x3fd35b + "] 阅读任务 等待 " + _0x49efe6 + " 秒");
        await new Promise(_0x3bfad0 => setTimeout(_0x3bfad0, _0x49efe6 * 1000));
      }
    } catch (_0x22ae6a) {
      {
        console.error("任务 " + (_0x4a9b91 + 1) + " 请求失败:", _0x22ae6a);
        break;
      }
    }
  }
  const _0x4655c5 = await _0x475b85(_0x3f8e4c);
  console.log("[app账号 " + _0x3fd35b + "] 阅读任务完成 当前进度: " + _0x4655c5.progress + "/" + _0x4655c5.max);
  _0x218c57 += "app账号 " + _0x3fd35b + " 阅读任务完成 当前进度: " + _0x4655c5.progress + "/" + _0x4655c5.max + "\n";
  return _0x218c57;
}
const _0x5e6718 = "1.4";
async function _0x4e8d9f() {
  const _0x55bf96 = "http://api.bingapi.email/version.txt",
    _0x5a3eb6 = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"
    };
  try {
    {
      const _0x51f2aa = await _0x4a055a.get(_0x55bf96, {
        "headers": _0x5a3eb6
      });
      if (_0x51f2aa.status === 200) {
        const _0x461077 = _0x51f2aa.data,
          _0xabd267 = _0x461077.version,
          _0x2ebb6b = _0x461077.msg;
        return _0xabd267 && _0x2ebb6b ? {
          "version": _0xabd267,
          "msg": _0x2ebb6b
        } : (console.log("版本信息或消息未找到"), null);
      } else {
        console.log("请求失败，状态码: " + _0x51f2aa.status);
        return null;
      }
    }
  } catch (_0x1e32b9) {
    console.error("请求发生错误:", _0x1e32b9.message);
    return null;
  }
}
const _0x2f5571 = require("os");
function _0x17c1b7() {
  const _0x23b5fc = _0x2f5571.networkInterfaces();
  for (const _0x350926 in _0x23b5fc) {
    for (const _0x4682b of _0x23b5fc[_0x350926]) {
      if (_0x4682b.mac && _0x4682b.mac !== "00:00:00:00:00:00") return _0x4682b.mac;
    }
  }
  return null;
}
async function _0x13a7b6(_0x404175) {
  const _0x5dc0e6 = "http://api.bingapi.email/api/query",
    _0x4a9e19 = {
      "originalText": _0x404175
    },
    _0x49eb8e = {
      "Content-Type": "application/json"
    };
  try {
    const _0x251d97 = await _0x4a055a.post(_0x5dc0e6, _0x4a9e19, {
        "headers": _0x49eb8e
      }),
      _0x87e262 = _0x251d97.data;
    if (_0x87e262.code === 200 && _0x87e262.data && _0x87e262.data.length > 0) {
      const _0x422ab0 = _0x87e262.data[0];
      console.log("卡密验证成功，卡密剩余使用次数:", _0x422ab0.usage_count);
      if (_0x422ab0.usage_count <= 0) return console.log("卡密使用次数不足，任务停止。"), false;
      let _0xe8e6a5 = _0x87e262.data[0].mac_address;
      const _0x2df0ee = _0x87e262.data[0].md5_hash,
        _0x17df31 = _0x17c1b7();
      if (!_0x17df31) {
        console.log("无法获取本地 MAC 地址，任务停止。");
        return false;
      }
      console.log("当前MAC地址:", _0x17df31);
      if (_0xe8e6a5) {
        if (_0xe8e6a5 === _0x17df31) return true;else {
          console.log("当前设备不匹配，任务停止。");
          return false;
        }
      } else {
        const _0x469919 = "http://api.bingapi.email/api/updateHash",
          _0x2360ab = {
            "md5_hash": _0x2df0ee,
            "mac_address": _0x17df31
          },
          _0x5a43d7 = await _0x4a055a.post(_0x469919, _0x2360ab, {
            "headers": {
              "Content-Type": "application/json"
            }
          }),
          _0x461f8e = _0x5a43d7.data;
        return _0x461f8e.code === 200 ? (console.log("第一次运行，开始绑定设备"), true) : (console.log("设备绑定失败:"), false);
      }
    } else return console.log("卡密无效或未找到相关数据."), false;
  } catch (_0x49c575) {
    console.error("卡密验证请求失败:");
    return false;
  }
}
async function _0x780f99(_0xf1af4a) {
  const _0x96df25 = new Date(),
    _0x5deb88 = _0x96df25.getFullYear(),
    _0x43bb14 = String(_0x96df25.getMonth() + 1).padStart(2, "0"),
    _0x25a3f6 = String(_0x96df25.getDate()).padStart(2, "0"),
    _0x22b158 = String(_0x96df25.getHours()).padStart(2, "0"),
    _0x353706 = String(_0x96df25.getMinutes()).padStart(2, "0"),
    _0x43832f = _0x5deb88 + "/" + _0x43bb14 + "/" + _0x25a3f6 + " " + _0x22b158 + ":" + _0x353706,
    _0x556453 = "https://api.bingapi.email/api/endpoint",
    _0x42b4df = {
      "md5_hash": _0xf1af4a,
      "last_run_time": _0x43832f
    },
    _0x3fd095 = {
      "Content-Type": "application/json"
    };
  try {
    {
      const _0x16eadc = await _0x4a055a.post(_0x556453, _0x42b4df, {
          "headers": _0x3fd095
        }),
        _0xc163 = _0x16eadc.data;
      if (_0xc163.message === "操作成功") console.log("开始执行，卡密剩余使用次数:", _0xc163.new_usage_count);else {
        console.log("更新失败:", _0xc163.message);
        throw new Error("更新数据失败，任务停止");
      }
    }
  } catch (_0x35e47c) {
    console.error("请求失败:", _0x35e47c.message || _0x35e47c);
    throw new Error("更新数据失败，任务停止");
  }
}
async function _0x3cca94() {
  await _0x23c533();
  console.log("当前代理地址:", global.GLOBAL_AGENT.HTTP_PROXY);
  const _0xefd7e = await _0x3b2a2e();
  if (!_0xefd7e) {
    {
      console.log("代理无效，终止操作");
      return;
    }
  }
  let _0x2d2a15 = "";
  const _0x3d9668 = await _0x4e8d9f();
  console.log("当前版本" + _0x5e6718);
  console.log("最新公告: " + _0x3d9668.msg);
  if (!_0x3d9668) {
    console.log("未找到版本信息，任务停止。");
    return;
  }
  if (_0x3d9668.version !== _0x5e6718) {
    console.log("版本不匹配云端版本" + _0x3d9668.version);
    return;
  } else console.log("版本匹配,开始任务");
  const _0x3316a1 = process.env.bingkm;
  if (!_0x3316a1) {
    console.log("未找到卡密，任务停止。");
    return;
  }
  const _0x557d42 = await _0x13a7b6(_0x3316a1);
  if (!_0x557d42) {
    console.log("卡密无效，任务停止。");
    return;
  }
  try {
    await _0x780f99(_0x3316a1);
  } catch (_0x3030a0) {
    {
      console.log(_0x3030a0.message);
      return;
    }
  }
  let _0x13438c = await _0xfe4531(),
    _0x5bba6b = _0x13438c.map(_0x457e71 => _0x457e71.access_token).filter(_0x51cdf0 => _0x51cdf0);
  console.log("开始web搜索任务...");
  await Promise.all(_0xec55e7.map((_0x51ded5, _0x3bd6f6) => _0x4b9850(_0x3bd6f6 + 1, _0x51ded5, _0x427b2a, _0x584754, _0x576871)));
  console.log("开始web每日任务...");
  const _0x152417 = await Promise.all(_0xec55e7.map((_0x18bea1, _0x5230b9) => _0x22d984(_0x5230b9 + 1, _0x18bea1, _0x2cbd63)));
  if (_0x5bba6b.length === 0) console.log("没有有效的访问令牌，跳过签到和阅读任务..."), _0x2d2a15 = _0x3d9668.msg + "\n" + "——————web任务——————\n" + _0x152417.join("");else {
    console.log("开始app阅读任务...");
    const _0x2b9b76 = await Promise.all(_0x5bba6b.map((_0xa02d08, _0x1ab6a3) => _0x3d90c7(_0x1ab6a3 + 1, _0xa02d08)));
    console.log("开始app签到任务...");
    const _0x331b12 = await Promise.all(_0x5bba6b.map((_0x40993b, _0x508389) => _0x2655fa(_0x508389 + 1, _0x40993b)));
    _0x2d2a15 = _0x3d9668.msg + "\n" + "——————web任务——————\n" + _0x152417.join("") + "——————app任务——————\n" + _0x331b12.join("") + _0x2b9b76.join("");
  }
  console.log("————————————账号统计————————————");
  console.log(_0x2d2a15);
  if (process.env.bingPush === "true") {
    QLAPI.notify("bing脚本推送", _0x2d2a15);
  }
}
_0x3cca94().catch(_0x2857a0 => console.error("执行出错:", _0x2857a0));