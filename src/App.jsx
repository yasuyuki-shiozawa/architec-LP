import React, { useState } from 'react';
import './App.css';

// 画像のインポート
import mascotMain from './assets/mascot.png';

// 実際の赤外線診断画像
import thermal1S from './assets/DJI_20240301104508_0004_S.JPG';
import thermal1T from './assets/DJI_20240301104508_0004_T.JPG';
import thermal2S from './assets/DJI_20240301104520_0005_S.JPG';
import thermal2T from './assets/DJI_20240301104520_0005_T.JPG';
import thermal3S from './assets/DJI_20240301104538_0006_S.JPG';
import thermal3T from './assets/DJI_20240301104538_0006_T.JPG';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    buildingType: '',
    issue: '',
    urgency: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('フォーム送信:', formData);
    alert('お問い合わせありがとうございます。担当者より24時間以内にご連絡いたします。');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヒーローセクション - 全画面表示 */}
      <section className="relative min-h-screen overflow-hidden">
        {/* 背景画像 - ドローンと青空 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.9)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%2387CEEB;stop-opacity:1" /><stop offset="100%" style="stop-color:%234169E1;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23skyGradient)"/><g opacity="0.3"><circle cx="200" cy="150" r="30" fill="white"/><circle cx="400" cy="100" r="25" fill="white"/><circle cx="600" cy="180" r="35" fill="white"/><circle cx="800" cy="120" r="20" fill="white"/><circle cx="1000" cy="160" r="28" fill="white"/></g></svg>')`
          }}
        ></div>
        
        {/* ドローンのSVGアイコン */}
        <div className="absolute top-20 left-1/4 opacity-30">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="45" y="35" width="30" height="10" rx="2" fill="white"/>
            <circle cx="25" cy="25" r="15" fill="white" opacity="0.8"/>
            <circle cx="95" cy="25" r="15" fill="white" opacity="0.8"/>
            <circle cx="25" cy="55" r="15" fill="white" opacity="0.8"/>
            <circle cx="95" cy="55" r="15" fill="white" opacity="0.8"/>
            <line x1="40" y1="40" x2="25" y2="25" stroke="white" strokeWidth="2"/>
            <line x1="80" y1="40" x2="95" y2="25" stroke="white" strokeWidth="2"/>
            <line x1="40" y1="40" x2="25" y2="55" stroke="white" strokeWidth="2"/>
            <line x1="80" y1="40" x2="95" y2="55" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* 左カラム: メインメッセージ（Zパターンの起点） */}
            <div className="space-y-8">
              {/* 会社ロゴエリア */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <span className="text-2xl font-black text-blue-900">有限会社アーキテック</span>
                </div>
                <div className="bg-yellow-400 px-4 py-2 rounded-full">
                  <span className="text-sm font-bold text-blue-900">25年の実績</span>
                </div>
              </div>

              {/* メインタイトル - 最大サイズ */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-2xl">
                  他社で
                  <span className="text-yellow-300">止められなかった</span>
                  <br />
                  ビルの雨漏りを
                  <span className="text-red-300">解決</span>
                </h1>
                
                {/* サブタイトル - 中サイズ */}
                <p className="text-xl lg:text-2xl font-bold text-white drop-shadow-xl leading-relaxed">
                  赤外線調査とドローン技術で
                  <br />
                  雨漏り箇所を正確に特定
                </p>
              </div>

              {/* CTAボタンエリア - 大きく目立つ */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                    <span>❤️</span>
                    <span>25年の実績</span>
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                    <span>📋</span>
                    <span>無料見積</span>
                  </button>
                </div>
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full text-base font-bold shadow-xl flex items-center space-x-2">
                  <span>🏢</span>
                  <span>県央地区専門</span>
                </button>
              </div>

              {/* 緊急性アピール */}
              <div className="bg-pink-100 border-l-4 border-pink-500 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⚠️</span>
                  <span className="font-bold text-pink-800">雨漏りの放置は危険です</span>
                </div>
                <p className="text-pink-700 mt-2 text-sm">
                  構造体の腐食・カビ発生・資産価値の大幅下落
                </p>
              </div>

              {/* 電話番号 - 最も目立つ位置 */}
              <div className="bg-yellow-100 p-6 rounded-2xl shadow-2xl border-4 border-yellow-400">
                <div className="text-center">
                  <p className="text-blue-900 font-bold text-lg mb-2">今すぐ電話で相談</p>
                  <a href="tel:080-5530-0033" className="text-4xl lg:text-5xl font-black text-blue-900 hover:text-blue-700 transition-colors duration-300">
                    080-5530-0033
                  </a>
                  <p className="text-blue-700 text-sm mt-2">受付時間：9:00〜18:00（年中無休）</p>
                </div>
              </div>
            </div>

            {/* 右カラム: マスコットキャラクター */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* マスコットキャラクター */}
                <div className="bg-green-400 p-8 rounded-3xl shadow-2xl border-4 border-green-500 transform hover:scale-105 transition-all duration-300">
                  <img 
                    src={mascotMain} 
                    alt="赤外線建築診断の専門キャラクター" 
                    className="w-64 h-64 object-contain"
                  />
                </div>
                
                {/* 吹き出し */}
                <div className="absolute -top-4 -left-8 bg-white p-4 rounded-2xl shadow-xl border-2 border-gray-200 max-w-xs">
                  <p className="text-blue-900 font-bold text-center">
                    こんにちは！僕に任せて
                    <br />
                    <span className="text-red-600">25年の実績で確実に解決します</span>
                  </p>
                  <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                </div>

                {/* アクションボタン */}
                <div className="mt-6 space-y-3">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-full font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                    今すぐ電話で無料相談
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-bold shadow-xl transform hover:scale-105 transition-all duration-300">
                    無料見積フォームへ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 問題提起セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            こんなお悩みありませんか？
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔄",
                title: "他社で修理したが再発",
                description: "3回修理しても雨漏りが止まらない。根本原因が特定できていない可能性があります。"
              },
              {
                icon: "💰",
                title: "工事費用が高額",
                description: "原因箇所が特定できず、広範囲の修繕で費用が膨らんでしまう。"
              },
              {
                icon: "⏰",
                title: "調査に時間がかかる",
                description: "足場設置や破壊調査で営業に支障。迅速な原因特定が必要。"
              }
            ].map((item, index) => (
              <div key={index} className="bg-red-50 p-8 rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl text-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-red-800 mb-4 text-center">{item.title}</h3>
                <p className="text-red-700 text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 解決策セクション */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-900 mb-4">
              赤外線診断ですべて解決
            </h2>
            <p className="text-xl text-blue-700 font-bold">
              25年の実績と最新技術で、他社で止められなかった雨漏りも確実に解決
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "原因箇所を正確に特定",
                description: "赤外線カメラで温度差を可視化。目に見えない水の浸入経路も一目瞭然。推測ではなく、科学的根拠に基づいた診断を実施。",
                icon: "🎯"
              },
              {
                number: "02", 
                title: "工事費を大幅削減",
                description: "ピンポイント修繕で無駄な工事を排除。従来の半分以下の費用で根本解決。足場代も不要でコスト削減効果は絶大。",
                icon: "💰"
              },
              {
                number: "03",
                title: "短時間で調査完了", 
                description: "ドローンと赤外線技術で半日で調査完了。営業への影響を最小限に抑え、迅速な問題解決を実現。",
                icon: "⚡"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {item.number}
                  </div>
                  <div className="text-4xl">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ドローン調査比較セクション */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            ドローン調査の圧倒的メリット
          </h2>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">従来手法との比較</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: "調査時間",
                  drone: "半日",
                  traditional: "3-5日",
                  droneIcon: "🚁",
                  traditionalIcon: "🏗️"
                },
                {
                  category: "費用", 
                  drone: "50%削減",
                  traditional: "高額",
                  droneIcon: "💰",
                  traditionalIcon: "💸"
                },
                {
                  category: "安全性",
                  drone: "100%安全", 
                  traditional: "高所作業リスク",
                  droneIcon: "✅",
                  traditionalIcon: "⚠️"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">{item.category}</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-green-100 p-4 rounded-xl border-2 border-green-300">
                      <div className="text-3xl mb-2">{item.droneIcon}</div>
                      <div className="font-bold text-green-800">{item.drone}</div>
                      <div className="text-sm text-green-600">← ドローン</div>
                    </div>
                    
                    <div className="bg-red-100 p-4 rounded-xl border-2 border-red-300">
                      <div className="text-3xl mb-2">{item.traditionalIcon}</div>
                      <div className="font-bold text-red-800">{item.traditional}</div>
                      <div className="text-sm text-red-600">← 従来</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 診断事例セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              実際の診断事例
            </h2>
            <p className="text-xl text-gray-700">
              DJIドローンと赤外線カメラで撮影した実際の診断画像をご覧ください。
              <br />
              温度差により問題箇所が一目瞭然で特定できます。
            </p>
          </div>

          <div className="space-y-16">
            {/* 診断事例1 */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">建物外壁の温度分布診断</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="font-bold text-red-700">高温部分</span>
                      <span className="text-gray-600">熱の蓄積・漏れ箇所</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      <span className="font-bold text-yellow-700">中温部分</span>
                      <span className="text-gray-600">注意が必要な箇所</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="font-bold text-blue-700">低温部分</span>
                      <span className="text-gray-600">正常な温度範囲</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="font-bold text-gray-700 mb-2">通常画像</p>
                    <img src={thermal1S} alt="通常画像" className="w-full rounded-lg shadow-lg" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-700 mb-2">赤外線画像</p>
                    <img src={thermal1T} alt="赤外線画像" className="w-full rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
            </div>

            {/* 診断事例2 */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="font-bold text-gray-700 mb-2">通常画像</p>
                      <img src={thermal2S} alt="通常画像" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-700 mb-2">赤外線画像</p>
                      <img src={thermal2T} alt="赤外線画像" className="w-full rounded-lg shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">屋上防水層の劣化診断</h3>
                  <p className="text-gray-700 leading-relaxed">
                    通常の目視では分からない防水層の劣化や水の浸入箇所も、赤外線画像では明確に確認できます。
                    オレンジ色の部分は温度が高く、水分の蓄積や断熱性能の低下を示しています。
                  </p>
                </div>
              </div>
            </div>

            {/* 診断事例3 */}
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">外壁クラック部分の詳細診断</h3>
                  <p className="text-gray-700 leading-relaxed">
                    外壁のクラック周辺の温度変化を詳細に分析。青色の低温部分と黄色の高温部分の境界線が、
                    実際の水の浸入経路を示しており、修繕すべき正確な箇所を特定できます。
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="font-bold text-gray-700 mb-2">通常画像</p>
                    <img src={thermal3S} alt="通常画像" className="w-full rounded-lg shadow-lg" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-gray-700 mb-2">赤外線画像</p>
                    <img src={thermal3T} alt="赤外線画像" className="w-full rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 科学的根拠 */}
          <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">赤外線診断の科学的根拠</h3>
            <p className="text-lg leading-relaxed text-center">
              赤外線カメラは0.1℃の温度差まで検出可能。水分の蓄積や断熱不良箇所は周囲と温度差が生じるため、
              目視では発見できない問題箇所も確実に特定できます。これにより、推測ではなく科学的根拠に基づいた
              正確な診断と効果的な修繕が可能になります。
            </p>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16">
            25年の実績が信頼の証
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25", unit: "年の実績", icon: "🏆" },
              { number: "2000+", unit: "調査実績", icon: "📊" },
              { number: "98%", unit: "解決率", icon: "✅" },
              { number: "100%", unit: "安全記録", icon: "🛡️" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-black text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-xl font-bold">{stat.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            お客様の喜びの声
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "田中様",
                title: "オフィスビルオーナー",
                rating: 5,
                comment: "他社で3回修理しても止まらなかった雨漏りが、アーキテックさんの赤外線調査で1回で完全に解決しました。25年の実績は伊達じゃないですね。"
              },
              {
                name: "佐藤様", 
                title: "商業ビルオーナー",
                rating: 5,
                comment: "ドローン調査で足場代が不要になり、コストが大幅に削減できました。営業への影響も最小限で助かりました。技術力の高さに感動です。"
              },
              {
                name: "山田様",
                title: "マンションオーナー", 
                rating: 5,
                comment: "25年の経験と最新技術の組み合わせが素晴らしい。他社では見つけられなかった原因を正確に特定してくれました。信頼できる会社です。"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.title}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">「{review.comment}」</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 専門家による技術解説セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-16">
            専門家による技術解説
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 mb-4">
                  20年の経験を持つ金澤氏が赤外線診断技術を詳しく解説
                </p>
                
                {/* YouTube動画埋め込みエリア */}
                <div className="bg-gray-800 rounded-xl p-8 mb-8">
                  <div className="text-white text-6xl mb-4">📹</div>
                  <p className="text-white text-lg">技術解説動画</p>
                  <p className="text-gray-300 text-sm mt-2">※実際の動画はここに埋め込まれます</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">動画のポイント</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">1</span>
                      <span>20年の経験に基づく専門的な診断技術</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">2</span>
                      <span>新築でも雨漏りした実際の事例紹介</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">3</span>
                      <span>赤外線画像による原因の可視化</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">4</span>
                      <span>修繕後の効果確認まで完全サポート</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">解説者プロフィール</h3>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        金
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">金澤 氏</h4>
                        <p className="text-blue-600 text-sm">赤外線建築診断士 / 20年の実績</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      「建物の健康状態を正確に把握し、お客様の大切な資産を守ることが私たちの使命です。
                      長年の経験と最新技術を組み合わせ、他社では解決できない問題も確実に解決いたします。」
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                  動画を見て問い合わせる
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 他社との違いセクション */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-blue-900 mb-8">
            なぜ他社で止められなかった
            <br />
            雨漏りを解決できるのか？
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-100 p-8 rounded-2xl border-2 border-red-300">
                <h3 className="text-2xl font-bold text-red-800 mb-4">よくある失敗パターン</h3>
                <p className="text-red-700 leading-relaxed">
                  「修理しても直らなかった」そんな声、少なくありません。そもそも、雨漏りの原因特定は非常に難しい作業です。
                  「水が入った場所」と「水が出てくる場所」が違うことも多く、見た目だけで判断するのは不可能に近いのです。
                  そのため、調査が不十分なまま修理を依頼してしまうと、根本原因が直らずに再発→追加工事→さらに費用がかかる…という悪循環になることも珍しくありません。
                </p>
              </div>

              <div className="bg-green-100 p-8 rounded-2xl border-2 border-green-300">
                <h3 className="text-2xl font-bold text-green-800 mb-4">アーキテックの解決アプローチ</h3>
                <p className="text-green-700 leading-relaxed mb-4">
                  「他社で修理したが、また漏れた」「何度も直しているのに、症状が消えない」
                  そんなケースは、実際に多数存在します。
                  今こそ、「まずは正しく原因を知る」という選択が、将来の安心への第一歩です。
                </p>
                
                <div className="space-y-4">
                  {[
                    { number: "1", title: "科学的診断", description: "赤外線技術で原因を可視化" },
                    { number: "2", title: "ピンポイント修繕", description: "無駄な工事を完全排除" },
                    { number: "3", title: "完全解決", description: "根本原因の確実な除去" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800">{step.title}</h4>
                        <p className="text-green-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 無料見積の流れセクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-8">
            無料見積までの流れ
          </h2>
          <p className="text-xl text-center text-gray-700 mb-16">
            簡単5ステップで、確実な問題解決へ
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "お問い合わせ",
                  description: "電話またはフォームでお気軽にご相談ください。現状をお聞かせいただき、調査日程を調整いたします。",
                  icon: "📞"
                },
                {
                  step: "02", 
                  title: "調査作業（赤外線調査の実施）",
                  description: "ドローンと赤外線カメラを使用して、建物の詳細調査を実施。雨漏り箇所を科学的に特定します。",
                  icon: "🚁"
                },
                {
                  step: "03",
                  title: "雨漏り箇所の修繕御見積書の発行", 
                  description: "調査結果を基に、ピンポイント修繕の詳細見積書を作成。無駄な工事は一切含めません。",
                  icon: "📋"
                },
                {
                  step: "04",
                  title: "工事契約",
                  description: "お見積り額にご納得いただけない場合は、工事契約を締結しなくても大丈夫です。調査結果はお渡しします。",
                  icon: "✍️"
                },
                {
                  step: "05",
                  title: "完了検査",
                  description: "修繕工事完了後、赤外線カメラで効果を確認。完全に問題が解決されたことを科学的に証明します。",
                  icon: "✅"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
                      <div className="flex items-center mb-3">
                        <span className="text-3xl mr-3">{item.icon}</span>
                        <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className="flex-shrink-0 w-16 flex justify-center">
                      <div className="w-0.5 h-16 bg-blue-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 最新機材セクション */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16">
            最新機材で精密診断
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-2xl">
              <div className="text-6xl text-center mb-6">🚁</div>
              <h3 className="text-2xl font-bold text-center mb-6">DJI ドローン</h3>
              
              <div className="space-y-4">
                {[
                  { label: "性能", value: "4K高解像度カメラ搭載" },
                  { label: "安全", value: "障害物回避センサー内蔵" },
                  { label: "効率", value: "高所作業不要で迅速調査" }
                ].map((spec, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {spec.label}
                    </div>
                    <span className="text-gray-300">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <div className="text-6xl text-center mb-6">🌡️</div>
              <h3 className="text-2xl font-bold text-center mb-6">赤外線カメラ</h3>
              
              <div className="space-y-4">
                {[
                  { label: "精度", value: "0.1℃の温度差を検出" },
                  { label: "可視化", value: "水の浸入経路を色で表示" },
                  { label: "証明", value: "科学的根拠のある診断結果" }
                ].map((spec, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {spec.label}
                    </div>
                    <span className="text-gray-300">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 問い合わせフォームセクション */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-8">
            無料見積お申し込み
          </h2>
          <p className="text-xl text-center mb-16">
            24時間以内にご連絡いたします
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 電話での相談 */}
              <div className="bg-yellow-400 text-blue-900 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-center mb-6">今すぐ電話で相談</h3>
                
                <div className="text-center mb-6">
                  <a href="tel:080-5530-0033" className="text-5xl font-black hover:text-blue-700 transition-colors duration-300">
                    080-5530-0033
                  </a>
                  <p className="text-lg mt-2">受付時間：9:00〜18:00（年中無休）</p>
                </div>

                <div className="space-y-3 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span>⚡</span>
                    <span className="font-bold">即座に専門家と相談可能</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📝</span>
                    <span className="font-bold">詳細な状況をお聞かせください</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📅</span>
                    <span className="font-bold">調査日程をその場で調整</span>
                  </div>
                </div>
              </div>

              {/* フォームでの問い合わせ */}
              <div className="bg-white text-gray-900 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-center mb-6">フォームでお問い合わせ</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        会社名
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        電話番号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        メールアドレス
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      建物所在地
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        建物種別
                      </label>
                      <select
                        name="buildingType"
                        value={formData.buildingType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">選択してください</option>
                        <option value="office">オフィスビル</option>
                        <option value="commercial">商業ビル</option>
                        <option value="apartment">マンション</option>
                        <option value="factory">工場</option>
                        <option value="other">その他</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        緊急度
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">選択してください</option>
                        <option value="urgent">緊急（すぐに対応が必要）</option>
                        <option value="normal">通常（1週間以内）</option>
                        <option value="low">低（1ヶ月以内）</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      雨漏りの状況・ご相談内容
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="雨漏りの状況、発生時期、過去の修理歴などをお聞かせください"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    無料見積を申し込む
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
