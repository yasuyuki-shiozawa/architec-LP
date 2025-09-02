import React, { useState } from 'react';
import './App.css';

// 画像のインポート
import mascotMain from './assets/こんにちは。僕に任せて.webp';
import mascotMain2 from './assets/こんにちは。僕に任せて。2.webp';
import mascotSuccess from './assets/成功.webp';
import mascotEnthusiastic from './assets/張り切って頑張る.webp';
import thermalImage from './assets/infrared-results.jpg';
import droneImage from './assets/drone-inspection.jpg';
import customer1 from './assets/customer1.jpg';
import customer2 from './assets/customer2.jpg';
import customer3 from './assets/customer3.jpg';

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
      {/* ヒーローセクション - Zパターンレイアウト */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* 背景画像 - ビル群のシルエット */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            {/* ビル群のシルエット */}
            <rect x="0" y="400" width="150" height="400" fill="currentColor" opacity="0.3"/>
            <rect x="150" y="300" width="120" height="500" fill="currentColor" opacity="0.25"/>
            <rect x="270" y="350" width="100" height="450" fill="currentColor" opacity="0.3"/>
            <rect x="370" y="250" width="140" height="550" fill="currentColor" opacity="0.2"/>
            <rect x="510" y="320" width="110" height="480" fill="currentColor" opacity="0.25"/>
            <rect x="620" y="280" width="130" height="520" fill="currentColor" opacity="0.3"/>
            <rect x="750" y="200" width="160" height="600" fill="currentColor" opacity="0.2"/>
            <rect x="910" y="350" width="120" height="450" fill="currentColor" opacity="0.25"/>
            <rect x="1030" y="300" width="100" height="500" fill="currentColor" opacity="0.3"/>
            <rect x="1130" y="400" width="70" height="400" fill="currentColor" opacity="0.25"/>
          </svg>
        </div>

        {/* 装飾的な要素 */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-red-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-10 animate-pulse delay-2000"></div>

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
                <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
                  他社で
                  <span className="text-yellow-400">止められなかった</span>
                  <br />
                  ビルの雨漏りを
                  <span className="text-red-400">解決</span>
                </h1>
                
                {/* サブタイトル - 中サイズ */}
                <p className="text-2xl lg:text-3xl font-bold text-blue-100">
                  赤外線調査とドローン技術で
                  <br />
                  雨漏り箇所を正確に特定
                </p>
              </div>

              {/* 3つの特徴バッジ */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-lg">25年の実績</span>
                  </div>
                </div>
                
                <div className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-bold text-lg">無料見積</span>
                  </div>
                </div>
                
                <div className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm8 0a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-lg">県央地区専門</span>
                  </div>
                </div>
              </div>

              {/* 緊急性の訴求 */}
              <div className="bg-red-600 text-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-bold text-xl">雨漏りの放置は危険です</div>
                    <div className="text-red-100">構造体の腐食・カビ発生・資産価値の大幅下落</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右カラム: ビジュアル + CTA（Zパターンの終点） */}
            <div className="space-y-8">
              {/* 電話番号 - 右上配置 */}
              <div className="bg-yellow-400 text-blue-900 p-6 rounded-xl shadow-2xl text-center transform hover:scale-105 transition-transform">
                <div className="text-sm font-bold mb-2">今すぐ電話で相談</div>
                <div className="text-4xl font-black mb-2">080-5530-0033</div>
                <div className="text-sm font-semibold">受付時間：9:00〜18:00（年中無休）</div>
              </div>

              {/* キャラクター画像の配置 */}
              <div className="bg-white p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src={mascotMain} 
                  alt="赤外線建築診断の専門キャラクター" 
                  className="w-full h-auto rounded-lg max-w-sm mx-auto"
                />
                <div className="text-center mt-4">
                  <div className="text-blue-900 font-bold text-lg">こんにちは！僕に任せて</div>
                  <div className="text-blue-700 text-sm">25年の実績で確実に解決します</div>
                </div>
              </div>

              {/* CTAボタン群 */}
              <div className="space-y-4">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transform hover:scale-105 transition-all">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>今すぐ電話で無料相談</span>
                  </div>
                </button>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transform hover:scale-105 transition-all">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>無料見積フォームへ</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 問題提起セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              こんな<span className="text-red-600">お悩み</span>ありませんか？
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 text-white p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-700">他社で修理したが再発</h3>
              </div>
              <p className="text-gray-700">3回修理しても雨漏りが止まらない。根本原因が特定できていない可能性があります。</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-white p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-700">工事費用が高額</h3>
              </div>
              <p className="text-gray-700">原因箇所が特定できず、広範囲の修繕で費用が膨らんでしまう。</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700">調査に時間がかかる</h3>
              </div>
              <p className="text-gray-700">足場設置や破壊調査で営業に支障。迅速な原因特定が必要。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 解決策セクション */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-900 mb-6">
              <span className="text-red-600">赤外線診断</span>で
              <span className="text-yellow-600">すべて解決</span>
            </h2>
            <p className="text-2xl text-blue-700 font-semibold">
              25年の実績と最新技術で、他社で止められなかった雨漏りも確実に解決
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={thermalImage} 
                alt="赤外線調査による雨漏り箇所の特定" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  <span className="bg-red-100 px-3 py-1 rounded-full text-sm mr-3">01</span>
                  原因箇所を正確に特定
                </h3>
                <p className="text-gray-700 text-lg">
                  赤外線カメラで温度差を可視化。目に見えない水の浸入経路も一目瞭然。推測ではなく、科学的根拠に基づいた診断を実施。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                  <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm mr-3">02</span>
                  工事費を大幅削減
                </h3>
                <p className="text-gray-700 text-lg">
                  ピンポイント修繕で無駄な工事を排除。従来の半分以下の費用で根本解決。足場代も不要でコスト削減効果は絶大。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-sm mr-3">03</span>
                  短時間で調査完了
                </h3>
                <p className="text-gray-700 text-lg">
                  ドローンと赤外線技術で半日で調査完了。営業への影響を最小限に抑え、迅速な問題解決を実現。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ドローン調査セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              <span className="text-blue-600">ドローン調査</span>の
              <span className="text-yellow-600">圧倒的メリット</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-xl shadow-xl">
                <h3 className="text-3xl font-bold mb-6">従来手法との比較</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center bg-white/20 p-4 rounded-lg">
                    <span className="font-semibold">調査時間</span>
                    <div className="text-right">
                      <div className="text-green-300">半日 ← ドローン</div>
                      <div className="text-red-300">3-5日 ← 従来</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white/20 p-4 rounded-lg">
                    <span className="font-semibold">費用</span>
                    <div className="text-right">
                      <div className="text-green-300">50%削減 ← ドローン</div>
                      <div className="text-red-300">高額 ← 従来</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white/20 p-4 rounded-lg">
                    <span className="font-semibold">安全性</span>
                    <div className="text-right">
                      <div className="text-green-300">100%安全 ← ドローン</div>
                      <div className="text-red-300">高所作業リスク ← 従来</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={droneImage} 
                alt="ドローンによる安全で効率的な調査" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 実績セクション */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              <span className="text-red-600">25年</span>の実績が
              <span className="text-blue-600">信頼の証</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-black text-red-600 mb-2">25</div>
              <div className="text-xl font-bold text-gray-700">年の実績</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-black text-blue-600 mb-2">2000+</div>
              <div className="text-xl font-bold text-gray-700">調査実績</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-black text-yellow-600 mb-2">98%</div>
              <div className="text-xl font-bold text-gray-700">解決率</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl font-black text-green-600 mb-2">100%</div>
              <div className="text-xl font-bold text-gray-700">安全記録</div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              <span className="text-blue-600">お客様</span>の
              <span className="text-yellow-500">喜びの声</span>
            </h2>
            
            {/* キャラクター追加 */}
            <div className="flex justify-center mb-8">
              <img 
                src={mascotSuccess} 
                alt="成功を喜ぶキャラクター" 
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src={customer1} 
                  alt="田中様" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-lg text-gray-800">田中様</div>
                  <div className="text-gray-600">オフィスビルオーナー</div>
                  <div className="flex text-yellow-400 mt-1">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                「他社で3回修理しても止まらなかった雨漏りが、アーキテックさんの赤外線調査で1回で完全に解決しました。25年の実績は伊達じゃないですね。」
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src={customer2} 
                  alt="佐藤様" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-lg text-gray-800">佐藤様</div>
                  <div className="text-gray-600">商業ビルオーナー</div>
                  <div className="flex text-yellow-400 mt-1">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                「ドローン調査で足場代が不要になり、コストが大幅に削減できました。営業への影響も最小限で助かりました。技術力の高さに感動です。」
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src={customer3} 
                  alt="山田様" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-lg text-gray-800">山田様</div>
                  <div className="text-gray-600">マンションオーナー</div>
                  <div className="flex text-yellow-400 mt-1">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                「25年の経験と最新技術の組み合わせが素晴らしい。他社では見つけられなかった原因を正確に特定してくれました。信頼できる会社です。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 動画セクション */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-900 mb-6">
              <span className="text-red-600">専門家</span>による
              <span className="text-yellow-600">技術解説</span>
            </h2>
            <p className="text-2xl text-blue-700 font-semibold">
              20年の経験を持つ金澤氏が赤外線診断技術を詳しく解説
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                  src="https://www.youtube.com/embed/GBSUan0Dyro"
                  title="赤外線建築診断技術解説"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-96 rounded-lg"
                ></iframe>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">動画のポイント</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      20年の経験に基づく専門的な診断技術
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      新築でも雨漏りした実際の事例紹介
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      赤外線画像による原因の可視化
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      修繕後の効果確認まで完全サポート
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">解説者プロフィール</h3>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="font-bold text-lg text-blue-900 mb-2">金澤 氏</div>
                    <div className="text-blue-700 mb-3">赤外線建築診断士 / 20年の実績</div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      「建物の健康状態を正確に把握し、お客様の大切な資産を守ることが私たちの使命です。
                      長年の経験と最新技術を組み合わせ、他社では解決できない問題も確実に解決いたします。」
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transform hover:scale-105 transition-all">
                  動画を見て問い合わせる
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 他社との違いセクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              なぜ<span className="text-red-600">他社で止められなかった</span>
              <br />
              雨漏りを<span className="text-blue-600">解決</span>できるのか？
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-red-700 mb-4">よくある失敗パターン</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                「修理しても直らなかった」そんな声、少なくありません。そもそも、雨漏りの原因特定は非常に難しい作業です。
                「水が入った場所」と「水が出てくる場所」が違うことも多く、見た目だけで判断するのは不可能に近いのです。
                そのため、調査が不十分なまま修理を依頼してしまうと、根本原因が直らずに再発→追加工事→さらに費用がかかる…という悪循環になることも珍しくありません。
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">アーキテックの解決アプローチ</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                「他社で修理したが、また漏れた」「何度も直しているのに、症状が消えない」 そんなケースは、実際に多数存在します。
                今こそ、「まずは正しく原因を知る」という選択が、将来の安心への第一歩です。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2">科学的診断</h4>
                  <p className="text-sm text-gray-600">赤外線技術で原因を可視化</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-yellow-900 mb-2">ピンポイント修繕</h4>
                  <p className="text-sm text-gray-600">無駄な工事を完全排除</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-green-900 mb-2">完全解決</h4>
                  <p className="text-sm text-gray-600">根本原因の確実な除去</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 調査の流れセクション */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              <span className="text-blue-600">無料見積</span>までの
              <span className="text-yellow-600">流れ</span>
            </h2>
            <p className="text-2xl text-gray-600 font-semibold">
              簡単5ステップで、確実な問題解決へ
            </p>
            
            {/* キャラクター追加 */}
            <div className="flex justify-center mt-8 mb-8">
              <img 
                src={mascotEnthusiastic} 
                alt="張り切って頑張るキャラクター" 
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "お問い合わせ",
                  description: "電話またはフォームでお気軽にご相談ください。現状をお聞かせいただき、調査日程を調整いたします。",
                  color: "red"
                },
                {
                  step: "02", 
                  title: "調査作業（赤外線調査の実施）",
                  description: "ドローンと赤外線カメラを使用して、建物の詳細調査を実施。雨漏り箇所を科学的に特定します。",
                  color: "yellow"
                },
                {
                  step: "03",
                  title: "雨漏り箇所の修繕御見積書の発行", 
                  description: "調査結果を基に、ピンポイント修繕の詳細見積書を作成。無駄な工事は一切含めません。",
                  color: "blue"
                },
                {
                  step: "04",
                  title: "工事契約",
                  description: "お見積り額にご納得いただけない場合は、工事契約を締結しなくても大丈夫です。調査結果はお渡しします。",
                  color: "green"
                },
                {
                  step: "05",
                  title: "完了検査",
                  description: "修繕工事完了後、赤外線カメラで効果を確認。完全に問題が解決されたことを科学的に証明します。",
                  color: "purple"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className={`bg-${item.color}-500 text-white w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl font-bold">{item.step}</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg flex-grow">
                    <h3 className={`text-2xl font-bold text-${item.color}-600 mb-3`}>{item.title}</h3>
                    <p className="text-gray-700 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 最新機材セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-800 mb-6">
              <span className="text-blue-600">最新機材</span>で
              <span className="text-red-600">精密診断</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">DJI ドローン</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">性能</span>
                  <span>4K高解像度カメラ搭載</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">安全</span>
                  <span>障害物回避センサー内蔵</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">効率</span>
                  <span>高所作業不要で迅速調査</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-red-900 mb-6">赤外線カメラ</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">精度</span>
                  <span>0.1℃の温度差を検出</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">可視化</span>
                  <span>水の浸入経路を色で表示</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">証明</span>
                  <span>科学的根拠のある診断結果</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 問い合わせフォームセクション */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              <span className="text-yellow-400">無料見積</span>
              お申し込み
            </h2>
            <p className="text-2xl text-blue-100 font-semibold">
              24時間以内にご連絡いたします
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 左カラム: 電話での問い合わせ */}
              <div className="bg-yellow-400 text-blue-900 p-8 rounded-xl shadow-2xl">
                <h3 className="text-3xl font-bold mb-6 text-center">今すぐ電話で相談</h3>
                <div className="text-center mb-8">
                  <div className="text-5xl font-black mb-4">080-5530-0033</div>
                  <div className="text-lg font-semibold">受付時間：9:00〜18:00（年中無休）</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">即座に専門家と相談可能</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">詳細な状況をお聞かせください</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">調査日程をその場で調整</span>
                  </div>
                </div>
              </div>

              {/* 右カラム: フォーム */}
              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">フォームでお問い合わせ</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">お名前 *</label>
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
                      <label className="block text-gray-700 font-semibold mb-2">会社名</label>
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
                      <label className="block text-gray-700 font-semibold mb-2">電話番号 *</label>
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
                      <label className="block text-gray-700 font-semibold mb-2">メールアドレス</label>
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
                    <label className="block text-gray-700 font-semibold mb-2">建物所在地</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="神奈川県○○市○○町..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">建物種別</label>
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
                        <option value="factory">工場・倉庫</option>
                        <option value="other">その他</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">緊急度</label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">選択してください</option>
                        <option value="urgent">緊急（雨漏り継続中）</option>
                        <option value="soon">早急（近日中に調査希望）</option>
                        <option value="normal">通常（1週間以内）</option>
                        <option value="consultation">相談のみ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">雨漏りの状況・ご相談内容</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="雨漏りの場所、発生時期、過去の修理歴など、詳しくお聞かせください"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-xl shadow-lg transform hover:scale-105 transition-all"
                  >
                    無料見積を申し込む
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">有限会社アーキテック</h3>
              <p className="text-gray-300 mb-4">
                神奈川県県央地区の赤外線建築診断専門会社。25年の実績と最新技術で、
                他社で解決できなかった雨漏り問題も確実に解決いたします。
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">お問い合わせ</h4>
              <div className="space-y-2 text-gray-300">
                <div>📞 080-5530-0033</div>
                <div>📠 046-271-0552</div>
                <div>✉️ architec7@gmail.com</div>
                <div>🕒 受付時間：9:00〜18:00（年中無休）</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">所在地</h4>
              <div className="text-gray-300">
                <div>〒242-0014</div>
                <div>神奈川県大和市南林間6-1-30</div>
                <div>リーベハイムA202</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 有限会社アーキテック. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

