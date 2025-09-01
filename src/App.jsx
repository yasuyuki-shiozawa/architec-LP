import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle, Camera, Zap, Shield, Target } from 'lucide-react'
import './App.css'

// 画像のインポート
import infraredDiagnosis from './assets/infrared-diagnosis-1.jpg'
import infraredPrinciple from './assets/infrared-principle.png'
import droneInspection from './assets/drone-inspection.jpg'
import infraredResults from './assets/infrared-results.jpg'
import heroBg from './assets/hero-bg.jpg'
import droneThermal from './assets/drone-thermal.webp'
import buildingInspection from './assets/building-inspection.jpg'
import customerSatisfaction from './assets/customer-satisfaction.jpg'
import soraHero from './assets/sora-hero.png'
import customer1 from './assets/customer1.jpg'
import customer2 from './assets/customer2.jpg'
import customer3 from './assets/customer3.jpg'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    buildingType: '',
    inquiry: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('お問い合わせありがとうございます。24時間以内にご連絡いたします。')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">アーキテック</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-semibold">080-5530-0033</span>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">
              無料見積
            </Button>
          </div>
        </div>
      </header>

      {/* ファーストビュー */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 左側：メインメッセージ */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-400 text-blue-900 text-lg px-6 py-2 font-bold shadow-lg">
                  ビル専門・25年の実績
                </Badge>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  他社で止められなかった<br />
                  <span className="text-yellow-400">ビルの雨漏り</span>を解決
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  赤外線調査とドローン技術で雨漏り箇所を正確に特定。<br />
                  工事費を大幅削減し、確実に雨漏りを止めます。
                </p>
              </div>
              
              {/* 特徴ポイント */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <Target className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">原因を正確に特定</h3>
                    <p className="text-blue-100 text-sm">赤外線調査で見えない水分浸入を可視化</p>
                  </div>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">ドローンで安全調査</h3>
                    <p className="text-blue-100 text-sm">足場不要で短時間・低コストを実現</p>
                  </div>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">25年の確かな実績</h3>
                    <p className="text-blue-100 text-sm">2000件以上の調査で培った技術力</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 右側：SORA画像とCTA */}
            <div className="space-y-8">
              {/* SORA画像 */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={soraHero} 
                    alt="赤外線建築診断の専門技術" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                {/* 装飾的な要素 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
              </div>
              
              {/* CTA部分 */}
              <div className="bg-yellow-400 text-blue-900 p-8 rounded-2xl shadow-2xl">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold">今すぐ無料相談</h2>
                  <div className="text-5xl font-bold tracking-wider">
                    080-5530-0033
                  </div>
                  <p className="text-lg font-medium">受付時間：9:00〜18:00（年中無休）</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button size="lg" className="flex-1 bg-blue-900 hover:bg-blue-800 text-white text-lg py-4 shadow-lg transform hover:scale-105 transition-all">
                      <Phone className="mr-2 h-6 w-6" />
                      今すぐ電話で相談
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white text-lg py-4 shadow-lg transform hover:scale-105 transition-all">
                      無料見積を依頼
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 背景装飾 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-5 animate-pulse delay-500"></div>
        </div>
      </section>

      {/* 緊急性アピール */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-red-600">ビルの雨漏り・外壁劣化は放置すると危険です</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-red-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 mb-3">構造体の腐食</h3>
                <p className="text-gray-700">
                  水分浸入により鉄筋の腐食が進行し、建物の耐震性が低下します。
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 mb-3">修繕費用の拡大</h3>
                <p className="text-gray-700">
                  早期発見なら数万円の修繕が、放置すると数百万円の大規模工事が必要になります。
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 mb-3">健康被害</h3>
                <p className="text-gray-700">
                  カビの発生により、アレルギーや呼吸器疾患などの健康被害が発生する可能性があります。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* なぜ赤外線診断なのか */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">なぜ赤外線診断なのか？</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={buildingInspection} alt="建物の赤外線診断" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Camera className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">目に見えない問題を可視化</h3>
                  <p className="text-gray-700">
                    温度差により、外部内部の水分浸入や断熱材の劣化を発見できます。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">非破壊で安全</h3>
                  <p className="text-gray-700">
                    建物を傷つけることなく、短時間で広範囲の調査が可能です。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">高精度な診断</h3>
                  <p className="text-gray-700">
                    25年の経験と最新機器により、微細な異常も見逃しません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ドローン調査の安全性と効率性 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">ドローン調査の安全性と効率性</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">従来の調査方法との違い</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 mb-2">ドローン調査</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• 足場不要で安全</li>
                    <li>• 短時間で広範囲調査</li>
                    <li>• 低コスト</li>
                    <li>• 高精度画像取得</li>
                    <li>• DJI最新機種使用</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-2">従来の調査</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• 足場設置が必要</li>
                    <li>• 時間とコストがかかる</li>
                    <li>• 高所作業の危険性</li>
                    <li>• 調査範囲が限定的</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img src={droneThermal} alt="ドローン赤外線調査" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* 25年の実績と信頼 */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">25年の実績と信頼</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">25年</div>
              <div className="text-lg">調査実績</div>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">2000+</div>
              <div className="text-lg">調査件数</div>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-lg">顧客満足度</div>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24時間</div>
              <div className="text-lg">以内回答</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">ビルの漏水・滲水</h3>
              <img src={infraredResults} alt="外壁の漏水・滲水" className="w-full rounded-lg mb-4" />
              <p className="text-sm">実際の調査結果例：外壁の水分浸入を赤外線で可視化</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">外壁の浮き</h3>
              <img src={infraredResults} alt="外壁の浮き" className="w-full rounded-lg mb-4" />
              <p className="text-sm">実際の調査結果例：タイルの浮きを温度差で検出</p>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">お客様の声</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src={customer1} alt="田中様" className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">田中様</h4>
                    <p className="text-gray-600 text-sm">オフィスビルオーナー</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  「他社で3回修理しても止まらなかった雨漏りが、アーキテックさんの調査で原因が判明し、1回で完全に止まりました。赤外線調査の精度に驚きました。」
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src={customer2} alt="佐藤様" className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">佐藤様</h4>
                    <p className="text-gray-600 text-sm">商業ビルオーナー</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  「ドローン調査で足場代が不要になり、コストを大幅に削減できました。調査結果も詳細で分かりやすく、安心して工事を依頼できました。」
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img src={customer3} alt="山田様" className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">山田様</h4>
                    <p className="text-gray-600 text-sm">マンションオーナー</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  「25年の実績と経験に裏打ちされた技術力を実感しました。無料見積から工事完了まで、丁寧な対応で信頼できる会社です。」
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">満足度98%の実績</h3>
              <p className="text-gray-700 mb-6">
                2000件以上の調査実績で培った技術力と、お客様第一の姿勢で高い満足度を実現しています。
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                今すぐ無料相談
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 専門家による技術解説動画 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              専門家による技術解説
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              20年の経験を持つ代表・金澤氏が、赤外線建築診断の重要性と実際の事例を詳しく解説します。<br />
              なぜ赤外線診断が必要なのか、どのように雨漏りの原因を特定するのかをご覧ください。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GBSUan0Dyro"
                  title="赤外線調査アーキテックNo.001"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  「赤外線調査アーキテックNo.001」
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">動画のポイント</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        20年の経験に基づく専門的な診断技術
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        新築でも雨漏りした実際の事例紹介
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        赤外線画像による原因の可視化
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        修繕後の効果確認まで完全サポート
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">解説者プロフィール</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">
                        <strong>代表 金澤氏</strong>
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        赤外線建築診断歴20年のエキスパート。建築知識と豊富な経験に基づき、
                        目に見えない建物の欠陥を科学的に特定する技術を持つ。
                        「赤外線診断は単にカメラがあればできるものではない」という信念のもと、
                        正確な診断と的確な修繕を提供している。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all">
                    <Phone className="mr-2 h-6 w-6" />
                    無料見積を依頼する
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 他社との違い */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">他社で止められなかった雨漏りを解決</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-600 mb-4">こんな経験はありませんか？</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 「修理しても直らなかった」</li>
                <li>• 「何度も直しているのに、症状が消えない」</li>
                <li>• 「他社で修理したが、また漏れた」</li>
                <li>• 「見積もりが高額で工事に踏み切れない」</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-4">アーキテックなら解決できます</h3>
              <p className="text-gray-700 mb-4">
                雨漏りの原因特定は非常に難しい作業です。「水が入った場所」と「水が出てくる場所」が違うことも多く、見た目だけで判断するのは不可能に近いのです。
              </p>
              <p className="text-gray-700 mb-4">
                そのため、調査が不十分なまま修理を依頼してしまうと、根本原因が直らずに再発→追加工事→さらに費用がかかる…という悪循環になることも珍しくありません。
              </p>
              <p className="text-gray-700 font-bold">
                今こそ、「まずは正しく原因を知る」という選択が、将来の安心への第一歩です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 無料見積の流れ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">無料見積の流れ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-bold mb-2">お問い合わせ</h3>
                <p className="text-sm text-gray-600">電話またはフォームでご連絡ください。</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-bold mb-2">調査作業</h3>
                <p className="text-sm text-gray-600">ドローンと赤外線カメラで詳細調査を実施します。</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-bold mb-2">見積書発行</h3>
                <p className="text-sm text-gray-600">雨漏り箇所の修繕見積書を無料で発行します。</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-bold mb-2">工事契約</h3>
                <p className="text-sm text-gray-600">見積額にご納得いただけた場合のみ契約します。</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
                <h3 className="font-bold mb-2">完了検査</h3>
                <p className="text-sm text-gray-600">工事完了後、再度赤外線調査で確認します。</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-bold text-blue-600">
                ※見積額が合わない場合は、工事契約を締結しなくても大丈夫です
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 使用機材 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">最新機材による高精度調査</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">DJI最新ドローン</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 4K高解像度カメラ搭載</li>
                  <li>• GPS自動飛行システム</li>
                  <li>• 風速15m/sまで対応</li>
                  <li>• 安全性認証取得済み</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">高性能赤外線カメラ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 温度分解能0.1℃</li>
                  <li>• 検出波長8-14μm</li>
                  <li>• リアルタイム画像解析</li>
                  <li>• 防水・防塵仕様</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 問い合わせフォーム */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">無料見積のお申し込み</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">お急ぎの方はお電話で</h3>
              <div className="bg-blue-800 p-6 rounded-lg mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 mr-3" />
                  <span className="text-3xl font-bold">080-5530-0033</span>
                </div>
                <p className="text-center">受付時間：9:00〜18:00（年中無休）</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-bold">有限会社アーキテック</p>
                    <p>神奈川県大和市南林間6-1-30 リーベハイムA202</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <p>Email: architec7@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <p>FAX: 046-271-0552</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" />
                  <p>24時間以内にご連絡いたします</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">お問い合わせフォーム</h3>
              <p className="mb-6">以下のフォームにご記入ください。24時間以内にご連絡いたします。</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">お名前 *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">電話番号 *</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">メールアドレス</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">建物所在地 *</label>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="bg-white text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">建物種別</label>
                  <select
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md bg-white text-black"
                  >
                    <option value="">選択してください</option>
                    <option value="office">事務所ビル</option>
                    <option value="commercial">商業ビル</option>
                    <option value="apartment">賃貸マンション</option>
                    <option value="factory">工場・倉庫</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">お困りの症状・ご相談内容</label>
                  <Textarea
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    placeholder="雨漏りの症状、気になる症状などをお聞かせください"
                    className="bg-white text-black"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg">
                  無料見積を申し込む
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">アーキテック</h3>
          <p className="text-gray-400 mb-4">赤外線建築診断・ドローン調査の専門会社</p>
          <p className="text-sm text-gray-500">© 2020 by architec co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

