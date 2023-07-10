import React from 'react'
import TiktokAdsComponent from '../components/TiktokAdsComponent'
import ContactForm from '../components/ContactForm'

export default function TiktokAdsEN() {
  return (
    <>

    <TiktokAdsComponent 
      mainTitle1={"TikTok Ads"}
      mainDesc1={"TikTok has over 800 million monthly active users, making it one of the world’s fastest growing apps. This means that being visible on the app is a big advantage, especially if you want to reach the 16-24 age group, who make up 41% of users."}
      underCard1Title={"Different ways to advertise using TikTok Ads"}
      underCard1Desc={" There are different ways to use TikTok Ads, in feed video-ads, pre roll-ads and branded hashtag challenge. In Feed video-ads are videos that come up while the user is scrolling. Pre roll-ads are videos that start as soon as the app is opened. Branded hashtag challenges are videos that encourage other users to participate in the challenge and use the hashtag in question, thus spreading brand awareness. Most of these options require a TikTok account manager."}
      mainTitle2={" The three categories of TikTok ads"}
      mainDesc2={`
      <p class="text-sm text-left pb-10">
      Ads created through TikTok Ads Manager are structured in three categories, “campaigns”, “ad groups” and “ads”. The first step to advertising on TikTok is to create a “campaign”, which also means that you need to decide your goals for the campaign and what you want the final result of your ads to be. In this category, you set campaign goals, you set a budget for the campaign and you create an ad group.
      </p>

      <p class="text-sm text-left pb-5">
      The second step to advertising on TikTok is to create an ad group, which means you can specify the target audience, budget, schedule and optimized goals for each ad group. You can select the number of ads in each ad group and then compare the results and optimize the ad groups based on the results.
      </p>

      <p class="text-sm text-left pb-10">
      The third step to advertising on TikTok is creating the ads, which is what you finally present to your target audience, i.e. what they will see. This is done by naming the ads, choosing the format of the ads, entering details about the ads and adding tracking.
      </p>
      `}

      underCard2Desc={"Reach over 800 million people monthly by advertising with TikTok Ads."}

      mainTitle3={"Analyse your TikTok-ads"}
      mainDesc3={` 
      <p class="text-sm text-left pb-5">
      After you’ve created your ads in TikTok Ads Manager and run them for a while, it’s time to analyze how the ads have performed. In TikTok Ads Manager there are two ways to do this, either from a macro point of view or a micro point of view.
      </p>
      <p class="text-sm text-left pb-5">
      When analysing the data from a macro point of view, you are looking at the overall data from all campaigns, and to get a bird’s eye view of your aggregated data, the best option is to look at the “Dashboard” page. Micro, on the other hand, means focusing on the details of campaigns and digging deeper into them. To better understand the results of the campaigns, ad groups and ads, the “Campaign” page is used.
      </p>
      <p class="text-sm text-left pb-10">
      The “Dashboard” page should be the first thing you use as it allows you to keep up to date with results, ad spend, and the general status of your campaigns. On the “Campaign” page, however, you can delve into all the details of your campaigns, ad groups and ads. Here you can also do things like filter your campaigns, customize the format to more easily analyze the data and review detailed data for each campaign, ad group and ad.
      </p>
      `}
    />

  <ContactForm 
    title={"How nice that you have found us!"}
    desc={"If you have any questions or are ready to start your digital journey now, feel free to fill in a few lines or email us at"}
    company={"Company"}
    name={"Name"}
    phone={"Phone"}
    email={"Email"}
    text={"What can we do for you?"}
    buttonText={"Send"}
    />

    </>
  )
}
