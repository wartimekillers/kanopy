import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Translation resources
const resources = {
  vi: {
    translation: {
      // Navigation
      nav: {
        platform: 'Trang chủ',
        solutions: 'Giải pháp', 
        about: 'Về chúng tôi',
        resources: 'Tài nguyên',
        pricing: 'Bảng giá',
        howItWorks: 'Cách thức hoạt động',
        forCompanies: 'Cho doanh nghiệp',
        forEmployees: 'Cho nhân viên',
        community: 'Cộng đồng',
        partners: 'Đối tác',
        mission: 'Sứ mệnh',
        stories: 'Câu chuyện',
        blog: 'Blog',
        faq: 'Câu hỏi thường gặp',
        descriptions: {
          howItWorks: 'Quy trình 4 bước để bắt đầu',
          forCompanies: 'Biến chi tiêu phúc lợi thành giá trị',
          forEmployees: 'Phúc lợi hàng ngày mang lại giá trị thật',
          community: 'Thể thao, đào tạo và sự kiện kết nối',
          partners: 'Ưu đãi độc quyền từ 100+ đối tác',
          mission: 'Sứ mệnh đổi mới phúc lợi nhân viên',
          stories: 'Câu chuyện thành công & case study',
          blog: 'Thông tin mới và xu hướng ngành',
          faq: 'Giải đáp các câu hỏi thường gặp'
        }
      },
      
      // Hero section
      hero: {
        title: 'Gắn kết. Giữ chân. Tri ân.',
        subtitle: 'Phúc lợi nhân viên phải chăng cho mọi doanh nghiệp.',
        description: 'Kanopy giúp doanh nghiệp nhỏ và vừa mang đến phúc lợi hàng ngày và chăm sóc sức khỏe như các tập đoàn lớn — dự dự trù, tiết kiệm và đơn giản.',
        startTrial: 'Dùng thử miễn phí 1 năm',
        contactUs: 'Liên hệ với chúng tôi',
        keyBenefits: '3 lợi ích chính',
        scrollToExplore: 'Cuộn để khám phá'
      },

      // Key benefits
      benefits: {
        title: '3 lợi ích chính',
        predictableBudgets: {
          title: 'Ngân sách dự dự trù',
          description: 'Chuyển chi tiêu phúc lợi rời rạc thành gói cố định theo tháng.'
        },
        dailyCare: {
          title: 'Chăm sóc hàng ngày',
          description: 'Phúc lợi hàng ngày mà nhân viên thực sự thích.'
        },
        strongerBrand: {
          title: 'Thương hiệu tuyển dụng mạnh hơn',
          description: 'Cạnh tranh ngang tầm với doanh nghiệp lớn nhờ phúc lợi có ý nghĩa.'
        }
      },

      // Call to action
      cta: {
        startFreeTrial: 'Dùng thử miễn phí 1 năm',
        noHiddenFees: 'Không phí ẩn, không phí thiết lập.',
        becomePartner: 'Trở thành đối tác',
        contactSales: 'Liên hệ tư vấn',
        scheduleDemo: 'Đặt lịch demo',
        viewAllArticles: 'Xem tất cả bài viết',
        readMore: 'Đọc thêm',
        learnMore: 'Tìm hiểu thêm',
        getStarted: 'Bắt đầu',
        download: 'Tải xuống',
        subscribe: 'Đăng ký'
      },

      // Contact modal
      contact: {
        becomePartner: 'Trở thành đối tác',
        contactUs: 'Liên hệ với chúng tôi',
        partnerDescription: 'Tham gia mạng lưới đối tác để phát triển doanh nghiệp',
        generalDescription: 'Bắt đầu với Kanopy hoặc gửi thắc mắc cho chúng tôi',
        quickContact: 'Liên hệ nhanh',
        chatWithUs: 'Chat với Kanopy',
        sendMessage: 'Gửi tin nhắn',
        fullName: 'Họ và tên',
        email: 'Email',
        company: 'Công ty',
        message: 'Nội dung',
        partnerPlaceholder: 'Giới thiệu doanh nghiệp và cách bạn muốn hợp tác cùng Kanopy...',
        generalPlaceholder: 'Cho biết quy mô đội ngũ, nhu cầu hoặc câu hỏi của bạn...',
        cancel: 'Hủy',
        send: 'Gửi',
        required: 'bắt buộc',
        readyToMakeTeamHappier: 'Sẵn sàng giúp đội ngũ hạnh phúc hơn?',
        address: '92 Xuân Thủy, Thảo Điền, TP. Hồ Chí Minh',
        allRightsReserved: 'Đã đăng ký bản quyền'
      },

      // Partners page
      partners: {
        featuredPartners: 'Đối tác nổi bật'
      },

      // About page
      about: {
        title: 'Về Kanopy',
        subtitle: 'Cách mạng hóa phúc lợi nhân viên cho nơi làm việc hiện đại',
        description: 'Chúng tôi tin rằng mọi nhân viên đều xứng đáng có những phúc lợi ý nghĩa giúp cải thiện sự cân bằng giữa công việc và cuộc sống cũng như sự phát triển nghề nghiệp.',
        mission: {
          title: 'Sứ mệnh của chúng tôi',
          description: 'Biến đổi cách các công ty thu hút và giữ chân nhân tài thông qua các nền tảng phúc lợi nhân viên sáng tạo, được cá nhân hóa, tạo ra giá trị thực sự cho cả nhà tuyển dụng và nhân viên.',
          readMore: 'Đọc toàn bộ sứ mệnh của chúng tôi'
        },
        vision: {
          title: 'Tầm nhìn của chúng tôi',
          description: 'Một thế giới nơi mọi nhân viên đều cảm thấy được đánh giá cao, gắn bó và được trao quyền để phát triển cả về mặt cá nhân và nghề nghiệp.'
        },
        values: {
          title: 'Giá trị của chúng tôi'
        },
        team: {
          title: 'Gặp gỡ đội ngũ của chúng tôi'
        },
        impact: {
          title: 'Tác động của chúng tôi'
        },
        stories: {
          title: 'Câu chuyện thành công',
          subtitle: 'Xem cách các công ty đang biến đổi văn hóa nơi làm việc với Kanopy'
        },
        cta: {
          title: 'Tham gia sứ mệnh của chúng tôi',
          subtitle: 'Giúp chúng tôi xây dựng tương lai của phúc lợi nhân viên'
        }
      },

      // Pricing page
      pricing: {
        title: 'Giá minh bạch, dễ hiểu',
        subtitle: 'Chọn gói phù hợp với đội ngũ của bạn',
        description: 'Không phí ẩn. Không phí thiết lập. Không ràng buộc thời hạn.',
        whatsIncluded: 'Bao gồm',
        commonQuestions: 'Câu hỏi thường gặp',
        plans: {
          student: {
            name: 'Gói Sinh viên',
            price: '25.000 VND',
            period: 'mỗi nhân viên/tháng',
            description: 'Gói ưu đãi dành cho sinh viên và startup',
            features: [
              'Truy cập đầy đủ mạng lưới đối tác',
              'Dashboard phân tích cơ bản',
              'Hỗ trợ email',
              'Onboarding miễn phí',
              'Không giới hạn giao dịch đổi ưu đãi'
            ],
            cta: 'Bắt đầu ngay',
            popular: 'Phổ biến nhất'
          },
          standard: {
            name: 'Gói Tiêu chuẩn',
            price: '100.000 VND',
            period: 'mỗi nhân viên/tháng',
            description: 'Truy cập đầy đủ phúc lợi & dashboard phân tích',
            features: [
              'Tất cả tính năng Sinh viên',
              'Dashboard phân tích nâng cao',
              'Hỗ trợ ưu tiên',
              'Báo cáo tùy chỉnh',
              'Tích hợp API'
            ],
            cta: 'Bắt đầu ngay'
          },
          enterprise: {
            name: 'Gói Doanh nghiệp',
            price: 'Tùy chỉnh',
            period: 'theo yêu cầu',
            description: 'Tối ưu cho đội ngũ 500+ nhân viên',
            features: [
              'Tất cả tính năng Standard',
              'Tích hợp SSO',
              'Quản lý tài khoản chuyên trách',
              'Onboarding tùy chỉnh',
              'Cam kết SLA'
            ],
            cta: 'Liên hệ tư vấn'
          }
        },
        features: [
          'Truy cập 100+ đối tác tin cậy',
          'Dashboard phân tích thời gian thực',
          'Ứng dụng di động dễ dùng',
          'Onboarding & đào tạo',
          'Hỗ trợ 24/7',
          'Tích hợp API',
          'Báo cáo tùy chỉnh',
          'Quản lý nhóm',
          'Bảo mật dữ liệu'
        ],
        faq: {
          changePlans: {
            question: 'Có thể thay đổi gói sau này không?',
            answer: 'Có, bạn có thể nâng/hạ gói bất kỳ lúc nào.'
          },
          teamSize: {
            question: 'Có yêu cầu quy mô đội ngũ tối thiểu không?',
            answer: 'Không. Bất kỳ quy mô nào cũng tham gia được, từ 10 nhân viên.'
          },
          viewAll: 'Xem tất cả câu hỏi thường gặp →'
        },
        cta: {
          title: 'Sẵn sàng nâng cấp phúc lợi?',
          subtitle: 'Tham gia cùng các doanh nghiệp đang dùng Kanopy'
        }
      },

      // Platform page
      platform: {
        title: 'Trang chủ',
        subtitle: 'Phúc lợi nhân viên đơn giản, minh bạch và dễ dự trù',
        description: 'Tất cả trong một dashboard được thiết kế để triển khai nhanh, dùng dễ và đo lường rõ ràng.',
        features: {
          title: 'Tính năng nổi bật'
        },
        cta: {
          title: 'Xem Kanopy hoạt động',
          subtitle: 'Trải nghiệm sự đơn giản của giải pháp tất-cả-trong-một'
        }
      },

      // Solutions component
      solutions: {
        title: 'Giải pháp',
        community: {
          title: 'Cộng đồng & Sự kiện',
          description: 'Không chỉ là giảm giá — chúng tôi kết nối con người qua giải thể thao, đào tạo chung và các buổi giao lưu kết nối.'
        },
        merchants: {
          title: 'Thương gia & Đối tác',
          description: 'Tham gia mạng lưới thương gia Kanopy — tiếp cận 10.000+ chuyên gia trên khắp Việt Nam.'
        }
      },

      // Home page components
      callout: {
        trialOffer: 'Bắt đầu dùng thử miễn phí 1 năm – Không có phí ẩn, không có chi phí thiết lập.'
      },

      howItWorks: {
        title: 'Cách thức hoạt động',
        step1: {
          title: 'Tham gia mạng lưới Kanopy',
          description: 'Đăng ký công ty và mời nhân viên tham gia.'
        },
        step2: {
          title: 'Chọn gói',
          description: 'Phí cố định 25.000đ/nhân viên/tháng.'
        },
        step3: {
          title: 'Kích hoạt phúc lợi',
          description: 'Nhân viên dùng ưu đãi ăn uống, sức khỏe, lifestyle ngay trên ứng dụng.'
        },
        step4: {
          title: 'Theo dõi hiệu quả',
          description: 'HR xem số liệu sử dụng và ROI theo thời gian thực.'
        }
      },

      forCompanies: {
        title: 'Biến chi tiêu phúc lợi thành giá trị thực.',
        subtitle: 'Kanopy biến chi phí phúc lợi rời rạc thành phúc lợi tác động cao, dự trù; giúp giữ chân và xây dựng thương hiệu.',
        valueProposition: 'Mỗi 1 VND chi tiêu = 10 VND giá trị cảm nhận.',
        benefits: {
          budgetPredictability: {
            title: 'Dự đoán Ngân sách',
            description: 'Chi phí hàng tháng cố định dễ dự báo.'
          },
          retentionLoyalty: {
            title: 'Giữ chân & Lòng trung thành',
            description: 'Phúc lợi hàng ngày xây dựng sự hài lòng của nhân viên.'
          },
          employerBranding: {
            title: 'Thương hiệu Nhà tuyển dụng',
            description: 'Cung cấp phúc lợi cấp tập đoàn với chi phí hợp lý.'
          },
          engagementData: {
            title: 'Dữ liệu Gắn kết',
            description: 'Theo dõi sử dụng & ROI qua dashboard phân tích.'
          }
        }
      },

      forEmployees: {
        title: 'Phúc lợi hàng ngày mang lại giá trị thật.',
        savings: 'Nhân viên tiết kiệm tới 500.000 VND mỗi tháng với Kanopy.',
        categories: {
          foodBeverage: {
            title: 'Ăn uống & Đồ uống',
            description: 'Giảm giá hàng ngày cho cà phê, bữa ăn, dùng bữa.'
          },
          healthWellness: {
            title: 'Sức khỏe & Chăm sóc',
            description: 'Tiếp cận phòng gym, yoga, nha sĩ và phòng khám.'
          },
          lifestyleLeisure: {
            title: 'Phong cách sống & Giải trí',
            description: 'Du lịch, phim ảnh, chăm sóc cá nhân, giải trí.'
          },
          learningGrowth: {
            title: 'Học tập & Phát triển',
            description: 'Nâng cao kỹ năng, ngôn ngữ, khóa học chuyên nghiệp.'
          }
        }
      },

      aboutSection: {
        title: 'Sứ mệnh & Tầm nhìn',
        description: 'Làm cho việc chăm sóc nhân viên trở nên đơn giản, phải chăng và mạnh mẽ — giúp mọi công ty chăm sóc như một tập đoàn. Xây dựng mạng lưới phúc lợi chia sẻ đầu tiên của Việt Nam cho mọi doanh nghiệp.',
        stats: {
          employees: '500.000+ nhân viên trong mạng lưới',
          discounts: 'giảm giá trung bình từ nhà cung cấp',
          value: 'giá trị nhân viên trên mỗi $1 chi tiêu'
        }
      },

      pricingSection: {
        title: 'Bảng giá',
        note: 'Lưu ý: Không có phí thiết lập. Không có phí ẩn. Hủy bất cứ lúc nào.',
        plans: {
          student: {
            name: 'Gói Sinh viên',
            price: '25,000 VND / nhân viên / tháng',
            description: 'Gói ưu đãi dành cho sinh viên và startup'
          },
          standard: {
            name: 'Gói Tiêu chuẩn',
            price: '100,000 VND / nhân viên / tháng',
            description: 'Truy cập đầy đủ phúc lợi & dashboard phân tích'
          },
          enterprise: {
            name: 'Gói Doanh nghiệp',
            price: 'Tùy chỉnh theo yêu cầu',
            description: 'Tùy chỉnh cho 500+ nhân viên'
          }
        }
      },

      // Route Pages
      howItWorksPage: {
        title: 'Cách thức hoạt động',
        subtitle: 'Quy trình của Kanopy trong 4 bước đơn giản',
        description: 'Bắt đầu với phúc lợi nhân viên thực sự hiệu quả cho đội ngũ và ngân sách của bạn.',
        steps: {
          step1: {
            title: 'Tham gia Mạng lưới Kanopy',
            description: 'Đăng ký công ty và giới thiệu nhân viên.'
          },
          step2: {
            title: 'Phí cố định',
            description: 'Mô hình phí đơn giản theo số nhân viên.'
          },
          step3: {
            title: 'Kích hoạt Phúc lợi',
            description: 'Nhân viên đổi thưởng ăn uống, sức khỏe, phúc lợi lifestyle qua ứng dụng.'
          },
          step4: {
            title: 'Theo dõi Kết quả',
            description: 'HR xem dữ liệu và ROI theo thời gian thực.'
          }
        }
      },

      forCompaniesPage: {
        title: 'Biến đổi Chi tiêu Phúc lợi thành Giá trị Thực',
        subtitle: 'Cho Doanh nghiệp',
        description: 'Kanopy biến chi phí phúc lợi tùy tiện thành những phúc lợi có tác động cao, dự đoán được, giúp tăng khả năng giữ chân và xây dựng thương hiệu.',
        benefits: {
          budgetPredictability: {
            title: 'Dự đoán Ngân sách',
            description: 'Chi phí hàng tháng cố định dễ dự báo.'
          },
          retentionLoyalty: {
            title: 'Giữ chân & Lòng trung thành',
            description: 'Phúc lợi hàng ngày xây dựng sự hài lòng của nhân viên.'
          },
          employerBranding: {
            title: 'Thương hiệu Nhà tuyển dụng',
            description: 'Cung cấp phúc lợi cấp tập đoàn với chi phí hợp lý.'
          },
          engagementData: {
            title: 'Dữ liệu Gắn kết',
            description: 'Theo dõi sử dụng & ROI qua dashboard phân tích.'
          }
        }
      },

      forEmployeesPage: {
        title: 'Phúc lợi Hàng ngày thực sự Quan trọng',
        subtitle: 'Cho Nhân viên',
        description: 'Truy cập hàng nghìn phúc lợi qua các danh mục cải thiện cuộc sống hàng ngày và sức khỏe của bạn.',
        categories: {
          foodBeverage: {
            title: 'Ăn uống & Đồ uống',
            description: 'Giảm giá hàng ngày cho cà phê, bữa ăn, dùng bữa.',
            examples: {
              coffeeShops: 'Quán cà phê',
              restaurants: 'Nhà hàng',
              foodDelivery: 'Giao đồ ăn'
            }
          },
          healthWellness: {
            title: 'Sức khỏe & Chăm sóc',
            description: 'Tiếp cận phòng gym, yoga, nha sĩ và phòng khám.',
            examples: {
              fitnessCenters: 'Trung tâm thể hình',
              yogaStudios: 'Studio yoga',
              medicalClinics: 'Phòng khám y tế'
            }
          },
          lifestyleLeisure: {
            title: 'Phong cách sống & Giải trí',
            description: 'Du lịch, phim ảnh, chăm sóc cá nhân, giải trí.',
            examples: {
              movieTheaters: 'Rạp chiếu phim',
              travelBooking: 'Đặt du lịch',
              spaServices: 'Dịch vụ spa'
            }
          },
          learningGrowth: {
            title: 'Học tập & Phát triển',
            description: 'Nâng cao kỹ năng, ngôn ngữ, khóa học chuyên nghiệp.',
            examples: {
              onlineCourses: 'Khóa học trực tuyến',
              languageSchools: 'Trường ngôn ngữ',
              workshops: 'Hội thảo'
            }
          }
        },
        savings: {
          title: 'Tiết kiệm tới 500.000 VND',
          description: 'Khoản tiết kiệm hàng tháng từ ưu đãi Kanopy',
          cta: 'Xem tất cả phúc lợi'
        }
      },

      solutionsPage: {
        title: 'Giải pháp Hiệu quả',
        subtitle: 'Phúc lợi nhân viên toàn diện mang lại kết quả thực tế',
        description: 'Từ sự kiện cộng đồng đến giảm giá đối tác, các giải pháp của chúng tôi được thiết kế để gắn kết, giữ chân và thưởng cho đội ngũ của bạn.',
        coreTitle: 'Giải pháp Cốt lõi của chúng tôi',
        impactTitle: 'Tác động Kinh doanh có thể Đo lường',
        processTitle: 'Cách thức hoạt động',
        solutions: {
          communityEvents: {
            title: 'Sự kiện Cộng đồng',
            description: 'Tham gia thể thao nơi làm việc, buổi đào tạo và sự kiện networking',
            features: {
              sports: 'Hoạt động thể thao',
              training: 'Hội thảo đào tạo',
              teamBuilding: 'Xây dựng đội nhóm',
              networking: 'Sự kiện networking'
            }
          },
          partnerNetwork: {
            title: 'Mạng lưới Đối tác',
            description: 'Truy cập giảm giá độc quyền từ 100+ đối tác tin cậy',
            features: {
              restaurant: 'Giảm giá nhà hàng',
              fitness: 'Thành viên phòng gym',
              retail: 'Tiết kiệm mua sắm',
              services: 'Ưu đãi dịch vụ'
            }
          }
        },
        benefits: {
          engagement: {
            title: 'Tăng cường Gắn kết Nhân viên',
            description: 'Giữ đội ngũ của bạn có động lực với phúc lợi họ thực sự sử dụng',
            statLabel: 'tăng gắn kết'
          },
          turnover: {
            title: 'Giảm Tỷ lệ Nghỉ việc',
            description: 'Giữ chân nhân tài hàng đầu với phúc lợi có ý nghĩa',
            statLabel: 'giảm tỷ lệ nghỉ việc'
          },
          wellness: {
            title: 'Cải thiện Sức khỏe',
            description: 'Hỗ trợ các sáng kiến sức khỏe thể chất và tinh thần',
            statLabel: 'cải thiện sức khỏe'
          },
          costs: {
            title: 'Tiết kiệm Chi phí',
            description: 'Giá trị cao hơn so với gói phúc lợi truyền thống',
            statLabel: 'ROI đạt được'
          }
        },
        process: {
          step1: {
            title: 'Thiết lập Nhanh chóng',
            description: 'Bắt đầu trong vài phút với quy trình onboarding đơn giản của chúng tôi'
          },
          step2: {
            title: 'Truy cập Nhân viên',
            description: 'Đội ngũ của bạn có quyền truy cập ngay lập tức vào tất cả phúc lợi và lợi ích'
          },
          step3: {
            title: 'Theo dõi Tác động',
            description: 'Giám sát gắn kết và ROI với phân tích chi tiết'
          }
        },
        cta: {
          title: 'Sẵn sàng biến đổi Phúc lợi Nhân viên của bạn?',
          subtitle: 'Tham gia cùng hàng nghìn công ty đã sử dụng giải pháp Kanopy',
          seeHowItWorks: 'Xem Cách thức hoạt động'
        }
      },

      // Community page
      communityPage: {
        hero: {
          title: 'Hơn cả ưu đãi — Chúng tôi xây dựng kết nối',
          subtitle: 'Cộng đồng & Sự kiện',
          description: 'Tham gia cộng đồng sôi động nơi mọi người kết nối, học hỏi và phát triển.'
        },
        activities: {
          sports: {
            title: 'CLB & giải thể thao',
            description: 'CLB bóng đá, cầu lông và chạy bộ giữa các công ty.'
          },
          training: {
            title: 'Đào tạo chia sẻ',
            description: 'Kỹ năng lãnh đạo, dịch vụ khách hàng và kỹ năng số.'
          },
          networking: {
            title: 'Giao lưu kết nối',
            description: 'Gặp gỡ hàng tháng cho các nhà sáng lập và đội ngũ HR.'
          }
        },
        cta: {
          title: 'Tham gia cộng đồng',
          description: 'Kết nối với các chuyên gia cùng chí hướng và mở rộng mạng lưới',
          button: 'Bắt đầu'
        }
      },

      // Mission page
      missionPage: {
        hero: {
          title: 'Sứ mệnh & Tầm nhìn',
          subtitle: 'Mục đích và mục tiêu của chúng tôi'
        },
        mission: {
          title: 'Sứ mệnh của chúng tôi',
          description: 'Làm cho việc chăm sóc nhân viên trở nên đơn giản, có thể chi trả và mạnh mẽ — giúp mọi công ty chăm sóc như một tập đoàn.'
        },
        vision: {
          title: 'Tầm nhìn của chúng tôi',
          description: 'Xây dựng mạng lưới phúc lợi chia sẻ đầu tiên của Việt Nam cho các doanh nghiệp — nơi sức mạnh tập thể tạo ra các quyền lợi cấp tập đoàn cho tất cả mọi người.'
        },
        impact: {
          title: 'Tác động của chúng tôi'
        },
        stats: {
          employees: {
            label: '500.000+ nhân viên trong mạng lưới'
          },
          discounts: {
            label: 'giảm giá trung bình từ nhà cung cấp'
          },
          value: {
            label: 'giá trị nhân viên cho mỗi $1 chi tiêu'
          }
        },
        cta: {
          title: 'Tham gia Sứ mệnh của chúng tôi',
          description: 'Trở thành một phần của phong trào dân chủ hóa phúc lợi nhân viên',
          button: 'Bắt đầu Dùng thử Miễn phí'
        }
      },

      // Stories page
      storiesPage: {
        hero: {
          title: 'Câu chuyện tác động',
          subtitle: 'Thành công thực tế',
          description: 'Xem cách các công ty như bạn đang nâng cấp phúc lợi với Kanopy.'
        },
        stories: [
          {
            company: 'Chuỗi café',
            result: 'Tiết kiệm 75% chi phí phúc lợi',
            quote: 'Nhân viên giờ có phúc lợi hàng ngày thay vì thưởng ngẫu hứng.',
            industry: 'F&B',
            employees: '150+ nhân viên'
          },
          {
            company: 'Startup công nghệ',
            result: '+30% giữ chân',
            quote: 'Nhân viên thực sự cảm nhận được sự quan tâm.',
            industry: 'Công nghệ',
            employees: '50+ nhân viên'
          },
          {
            company: 'Cửa hàng bán lẻ',
            result: '0 gánh nặng vận hành',
            quote: 'Kanopy tự động hóa — HR rảnh tay trở lại.',
            industry: 'Bán lẻ',
            employees: '100+ nhân viên'
          }
        ],
        results: {
          title: 'Kết quả được chứng minh',
          stats: {
            costSavings: {
              value: '75%',
              label: 'Tiết kiệm chi phí trung bình'
            },
            retention: {
              value: '30%',
              label: 'Tăng giữ chân'
            },
            adminOverhead: {
              value: '0',
              label: 'Gánh nặng vận hành'
            }
          }
        },
        cta: {
          title: 'Viết câu chuyện của bạn',
          subtitle: 'Gia nhập những công ty đã thấy kết quả',
          button: 'Bắt đầu dùng thử miễn phí'
        }
      },

      // Blog page
      blogPage: {
        hero: {
          title: 'Blog & Insights',
          subtitle: 'Xu hướng HR & mẹo hay',
          description: 'Cập nhật kiến thức về phúc lợi nhân viên, xu hướng HR và thông tin cho doanh nghiệp tại Việt Nam.'
        },
        categories: {
          hrTrends: 'Xu hướng HR',
          engagement: 'Gắn kết',
          budgetPlanning: 'Lập kế hoạch Ngân sách',
          caseStudy: 'Nghiên cứu Trường hợp',
          roiAnalysis: 'Phân tích ROI',
          remoteCulture: 'Văn hóa Từ xa'
        },
        articles: {
          hrTrends: {
            title: 'Xu hướng HR tại Việt Nam: Doanh nghiệp cần biết gì 2025',
            excerpt: 'Những xu hướng mới định hình nhân sự và cách doanh nghiệp giữ lợi thế.',
            date: '01/10/2025'
          },
          engagement: {
            title: 'Ý tưởng gắn kết cho doanh nghiệp nhỏ',
            excerpt: 'Chiến lược đơn giản, hiệu quả mà không tốn kém.',
            date: '28/09/2025'
          },
          budgetPlanning: {
            title: 'Lập ngân sách phúc lợi: Hướng dẫn hoàn chỉnh',
            excerpt: 'Xây ngân sách bền vững, phù hợp doanh nghiệp.',
            date: '25/09/2025'
          },
          caseStudy: {
            title: 'Case study: Startup công nghệ tăng giữ chân 30%',
            excerpt: 'Phúc lợi hàng ngày thay đổi văn hóa và giảm nghỉ việc.',
            date: '22/09/2025'
          },
          roiAnalysis: {
            title: 'ROI của phúc lợi: Đo lường điều quan trọng',
            excerpt: 'Cách theo dõi và đo lường ROI cho chương trình phúc lợi.',
            date: '20/09/2025'
          },
          remoteCulture: {
            title: 'Văn hóa công ty khi remote-first',
            excerpt: 'Giữ văn hóa mạnh khi đội ngũ phân tán.',
            date: '18/09/2025'
          }
        },
        readTime: '5 phút đọc',
        readMore: 'Đọc thêm →',
        newsletter: {
          title: 'Luôn cập nhật',
          description: 'Nhận cập nhật mới qua email',
          placeholder: 'Nhập email của bạn',
          subscribe: 'Đăng ký'
        }
      },

      // FAQ page
      faqPage: {
        hero: {
          title: 'Câu hỏi Thường gặp',
          subtitle: 'Các câu hỏi phổ biến đã được trả lời',
          description: 'Tìm câu trả lời cho những câu hỏi phổ biến nhất về Kanopy và cách nó có thể mang lại lợi ích cho công ty của bạn.'
        },
        faqs: {
          cost: {
            question: 'Kanopy có giá bao nhiều?',
            answer: '25.000đ/nhân viên/tháng. Không phí thiết lập, không phí ẩn.'
          },
          trial: {
            question: 'Có dùng thử miễn phí không?',
            answer: 'Có. 1 năm dùng thử cho thành viên sáng lập — không yêu cầu cam kết.'
          },
          smallTeams: {
            question: 'Đội nhỏ có tham gia được không?',
            answer: 'Hoàn toàn được. Doanh nghiệp từ 10 người vẫn hưởng trọn lợi ích mạng lưới.'
          },
          usage: {
            question: 'Nhân viên sử dụng ưu đãi ra sao?',
            answer: 'Qua ứng dụng Kanopy bằng QR hoặc mã đổi ưu đãi.'
          },
          benefits: {
            question: 'Có những loại phúc lợi nào?',
            answer: 'Ăn uống, sức khỏe & chăm sóc, lifestyle & giải trí, học tập & phát triển.'
          },
          setup: {
            question: 'Mất bao lâu để bắt đầu?',
            answer: 'Thiết lập dưới 24 giờ. Duyệt xong là dùng ngay.'
          },
          contract: {
            question: 'Có yêu cầu thời hạn tối thiểu không?',
            answer: 'Không. Có thể hủy bất kỳ lúc nào với thông báo trước 30 ngày.'
          },
          analytics: {
            question: 'Có báo cáo & phân tích không?',
            answer: 'Có. Dashboard HR cung cấp số liệu sử dụng chi tiết và báo cáo ROI.'
          }
        },
        contact: {
          title: 'Vẫn còn thắc mắc?',
          description: 'Đội ngũ Kanopy luôn sẵn sàng hỗ trợ bạn khởi động',
          supportButton: 'Liên hệ hỗ trợ',
          demoButton: 'Đặt lịch demo'
        }
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        platform: 'Platform',
        solutions: 'Solutions',
        about: 'About',
        resources: 'Resources', 
        pricing: 'Pricing',
        howItWorks: 'How It Works',
        forCompanies: 'For Companies',
        forEmployees: 'For Employees',
        community: 'Community',
        partners: 'Partners',
        mission: 'Mission',
        stories: 'Stories',
        blog: 'Blog',
        faq: 'FAQ',
        descriptions: {
          howItWorks: '4-step process to get started',
          forCompanies: 'Transform welfare spending into value',
          forEmployees: 'Everyday perks that truly matter',
          community: 'Sports, training, and networking events',
          partners: 'Exclusive deals from 100+ trusted partners',
          mission: 'Our mission to transform employee benefits',
          stories: 'Customer success stories and case studies',
          blog: 'Latest insights and industry trends',
          faq: 'Answers to common questions'
        }
      },

      // Hero section
      hero: {
        title: 'Engage. Retain. Reward.',
        subtitle: 'Employee benefits made affordable for every company.',
        description: 'Kanopy helps small and medium businesses offer daily perks and wellness benefits like large corporations — predictable, affordable, and effortless.',
        startTrial: 'Start Free Trial',
        contactUs: 'Contact Us',
        keyBenefits: '3 Key Benefits',
        scrollToExplore: 'Scroll to explore'
      },

      // Key benefits
      benefits: {
        title: '3 Key Benefits',
        predictableBudgets: {
          title: 'Budget Optimization',
          description: 'Replace random welfare spending with simple monthly plans.'
        },
        dailyCare: {
          title: 'Quality Employee Experience',
          description: 'Provide everyday benefits your team actually enjoys.'
        },
        strongerBrand: {
          title: 'Enhanced Employer Brand',
          description: 'Compete with big companies by offering meaningful perks.'
        }
      },

      // Call to action
      cta: {
        startFreeTrial: 'Start your free 1-year trial',
        noHiddenFees: 'No hidden fees, no setup costs.',
        becomePartner: 'Become a Partner',
        contactSales: 'Contact Sales',
        scheduleDemo: 'Schedule Demo',
        viewAllArticles: 'View all articles',
        readMore: 'Read more',
        learnMore: 'Learn more',
        getStarted: 'Get Started',
        download: 'Download',
        subscribe: 'Subscribe'
      },

      // Contact modal
      contact: {
        becomePartner: 'Become a Partner',
        contactUs: 'Contact Us',
        partnerDescription: 'Join our partner network and grow your business',
        generalDescription: 'Get started with Kanopy or ask us anything',
        quickContact: 'Quick Contact',
        chatWithUs: 'Chat with us',
        sendMessage: 'Send us a message',
        fullName: 'Full Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        partnerPlaceholder: 'Tell us about your business and how you\'d like to partner with us...',
        generalPlaceholder: 'Tell us about your team size, needs, or any questions...',
        cancel: 'Cancel',
        send: 'Send Message',
        required: 'required',
        readyToMakeTeamHappier: 'Ready to make your team happier?',
        address: '92 Xuân Thủy, Thảo Điền, Ho Chi Minh City',
        allRightsReserved: 'All rights reserved'
      },

      // Partners page
      partners: {
        featuredPartners: 'Featured Partners'
      },

      // About page
      about: {
        title: 'About Kanopy',
        subtitle: 'Revolutionizing employee benefits for the modern workplace',
        description: 'We believe every employee deserves meaningful perks that enhance their work-life balance and career growth.',
        mission: {
          title: 'Our Mission',
          description: 'To transform how companies engage and retain talent through innovative, personalized employee benefit platforms that create real value for both employers and employees.',
          readMore: 'Read our full mission'
        },
        vision: {
          title: 'Our Vision',
          description: 'A world where every employee feels valued, engaged, and empowered to thrive both personally and professionally.'
        },
        values: {
          title: 'Our Values'
        },
        team: {
          title: 'Meet Our Team'
        },
        impact: {
          title: 'Our Impact'
        },
        stories: {
          title: 'Success Stories',
          subtitle: 'See how companies are transforming their workplace culture with Kanopy'
        },
        cta: {
          title: 'Join Our Mission',
          subtitle: 'Help us build the future of employee benefits'
        }
      },

      // Pricing page
      pricing: {
        title: 'Simple, Transparent Pricing',
        subtitle: 'Choose the plan that works for your team',
        description: 'No hidden fees, no setup costs, no long-term commitments. Start with our free trial.',
        whatsIncluded: 'What\'s Included',
        commonQuestions: 'Common Questions',
        plans: {
          student: {
            name: 'Student Plan',
            price: '25,000 VND',
            period: 'per employee/month',
            description: 'Special offer for students and startups',
            features: [
              'Full access to partner network',
              'Basic analytics dashboard',
              'Email support',
              'Free onboarding',
              'Unlimited redemptions'
            ],
            cta: 'Get Started',
            popular: 'Most Popular'
          },
          standard: {
            name: 'Standard Plan',
            price: '100,000 VND',
            period: 'per employee/month',
            description: 'Full access to perks & analytics dashboard',
            features: [
              'All Student features',
              'Advanced analytics dashboard',
              'Priority support',
              'Custom reporting',
              'API integrations'
            ],
            cta: 'Get Started'
          },
          enterprise: {
            name: 'Enterprise Plan',
            price: 'Custom',
            period: 'pricing',
            description: 'Tailored for 500+ employees',
            features: [
              'All Standard features',
              'SSO integration',
              'Dedicated account manager',
              'Custom onboarding',
              'SLA commitment'
            ],
            cta: 'Contact Sales'
          }
        },
        features: [
          'Access to 100+ trusted partners',
          'Real-time analytics dashboard',
          'Easy-to-use mobile app',
          'Onboarding & training',
          '24/7 customer support',
          'API integrations',
          'Custom reporting',
          'Team management',
          'Data security'
        ],
        faq: {
          changePlans: {
            question: 'Can I change plans later?',
            answer: 'Yes, you can upgrade or downgrade your plan at any time.'
          },
          teamSize: {
            question: 'Is there a minimum team size?',
            answer: 'No, teams of any size can join Kanopy starting from 10 employees.'
          },
          viewAll: 'View all FAQs →'
        },
        cta: {
          title: 'Ready to Transform Your Employee Benefits?',
          subtitle: 'Join thousands of companies already using Kanopy'
        }
      },

      // Platform page
      platform: {
        title: 'The Platform',
        subtitle: 'End-to-end onboarding, simple plans, effortless redemption, and real-time analytics',
        description: 'All in one dashboard designed for simplicity and scale.',
        features: {
          title: 'Platform Features'
        },
        cta: {
          title: 'Ready to See the Platform?',
          subtitle: 'Experience the simplicity of our all-in-one solution'
        }
      },

      // Solutions component
      solutions: {
        title: 'Solutions',
        community: {
          title: 'Community & Events',
          description: 'Beyond discounts — we build connection with sports leagues, shared training, and networking dinners.'
        },
        merchants: {
          title: 'Merchants & Partners',
          description: 'Join the Kanopy Merchant Network — reach 10,000+ professionals across Vietnam.'
        }
      },

      // Home page components
      callout: {
        trialOffer: 'Start your free 1-year trial – No hidden fees, no setup costs.'
      },

      howItWorks: {
        title: 'How it works',
        step1: {
          title: 'Join the Kanopy Network',
          description: 'Register your company and onboard employees.'
        },
        step2: {
          title: 'Flat Fee',
          description: 'Simple per-employee pricing model.'
        },
        step3: {
          title: 'Activate Benefits',
          description: 'Employees redeem food, wellness, lifestyle perks via app.'
        },
        step4: {
          title: 'Track Results',
          description: 'HR sees data and ROI in real time.'
        }
      },

      forCompanies: {
        title: 'Transform Welfare Spending into Real Value.',
        subtitle: 'Kanopy turns ad-hoc welfare costs into predictable, high-impact benefits that boost retention and branding.',
        valueProposition: 'Every 1 VND spent = 10 VND in employee value.',
        benefits: {
          budgetPredictability: {
            title: 'Budget Predictability',
            description: 'Fixed monthly expense that\'s easy to forecast.'
          },
          retentionLoyalty: {
            title: 'Retention & Loyalty',
            description: 'Daily perks that build employee satisfaction.'
          },
          employerBranding: {
            title: 'Employer Branding',
            description: 'Offer corporate-level benefits at affordable cost.'
          },
          engagementData: {
            title: 'Engagement Data',
            description: 'Track usage & ROI through analytics dashboard.'
          }
        }
      },

      forEmployees: {
        title: 'Everyday Perks that Truly Matter.',
        savings: 'Employees save up to 2,000,000 VND monthly through Kanopy perks.',
        categories: {
          foodBeverage: {
            title: 'Food & Beverage',
            description: 'Daily discounts on coffee, meals, dining.'
          },
          healthWellness: {
            title: 'Health & Wellness',
            description: 'Access to gyms, yoga, dentists, and clinics.'
          },
          lifestyleLeisure: {
            title: 'Lifestyle & Leisure',
            description: 'Travel, movies, personal care, entertainment.'
          },
          learningGrowth: {
            title: 'Learning & Growth',
            description: 'Upskilling, languages, professional courses.'
          }
        }
      },

      aboutSection: {
        title: 'Mission & Vision',
        description: 'To make employee care simple, affordable, and powerful — helping every company care like a corporation. Build Vietnam\'s first shared benefits network for all businesses.',
        stats: {
          employees: '500,000+ employees in network',
          discounts: 'average vendor discounts',
          value: 'employee value per $1 spent'
        }
      },

      pricingSection: {
        title: 'Pricing',
        note: 'Note: No setup fee. No hidden charges. Cancel anytime.',
        plans: {
          student: {
            name: 'Student Plan',
            price: '25,000 VND / employee / month',
            description: 'Special offer for students and startups'
          },
          standard: {
            name: 'Standard Plan',
            price: '100,000 VND / employee / month',
            description: 'Full access to perks & analytics dashboard'
          },
          enterprise: {
            name: 'Enterprise Plan',
            price: 'Custom pricing on request',
            description: 'Tailored for 500+ employees'
          }
        }
      },

      // Route Pages
      howItWorksPage: {
        title: 'How It Works',
        subtitle: 'Kanopy\'s process in simple 4 steps',
        description: 'Get started with employee benefits that actually work for your team and your budget.',
        steps: {
          step1: {
            title: 'Join the Kanopy Network',
            description: 'Register your company and onboard employees.'
          },
          step2: {
            title: 'Flat Fee',
            description: 'Simple per-employee pricing model.'
          },
          step3: {
            title: 'Activate Benefits',
            description: 'Employees redeem food, wellness, lifestyle perks via app.'
          },
          step4: {
            title: 'Track Results',
            description: 'HR sees data and ROI in real time.'
          }
        }
      },

      forCompaniesPage: {
        title: 'Transform Welfare Spending into Real Value',
        subtitle: 'For Companies',
        description: 'Kanopy turns ad-hoc welfare costs into predictable, high-impact benefits that boost retention and branding.',
        benefits: {
          budgetPredictability: {
            title: 'Budget Predictability',
            description: 'Fixed monthly expense that\'s easy to forecast.'
          },
          retentionLoyalty: {
            title: 'Retention & Loyalty',
            description: 'Daily perks that build employee satisfaction.'
          },
          employerBranding: {
            title: 'Employer Branding',
            description: 'Offer corporate-level benefits at affordable cost.'
          },
          engagementData: {
            title: 'Engagement Data',
            description: 'Track usage & ROI through analytics dashboard.'
          }
        }
      },

      forEmployeesPage: {
        title: 'Everyday Perks that Truly Matter',
        subtitle: 'For Employees',
        description: 'Access thousands of benefits across categories that improve your daily life and well-being.',
        categories: {
          foodBeverage: {
            title: 'Food & Beverage',
            description: 'Daily discounts on coffee, meals, dining.',
            examples: {
              coffeeShops: 'Coffee shops',
              restaurants: 'Restaurants',
              foodDelivery: 'Food delivery'
            }
          },
          healthWellness: {
            title: 'Health & Wellness',
            description: 'Access to gyms, yoga, dentists, and clinics.',
            examples: {
              fitnessCenters: 'Fitness centers',
              yogaStudios: 'Yoga studios',
              medicalClinics: 'Medical clinics'
            }
          },
          lifestyleLeisure: {
            title: 'Lifestyle & Leisure',
            description: 'Travel, movies, personal care, entertainment.',
            examples: {
              movieTheaters: 'Movie theaters',
              travelBooking: 'Travel booking',
              spaServices: 'Spa services'
            }
          },
          learningGrowth: {
            title: 'Learning & Growth',
            description: 'Upskilling, languages, professional courses.',
            examples: {
              onlineCourses: 'Online courses',
              languageSchools: 'Language schools',
              workshops: 'Workshops'
            }
          }
        },
        savings: {
          title: 'Save up to 2,000,000 VND',
          description: 'Employees save monthly through Kanopy perks',
          cta: 'See All Benefits'
        }
      },

      solutionsPage: {
        title: 'Solutions That Work',
        subtitle: 'Comprehensive employee perks that drive real results',
        description: 'From community events to partner discounts, our solutions are designed to engage, retain, and reward your team.',
        coreTitle: 'Our Core Solutions',
        impactTitle: 'Measurable Business Impact',
        processTitle: 'How It Works',
        solutions: {
          communityEvents: {
            title: 'Community Events',
            description: 'Join workplace sports, training sessions, and networking events',
            features: {
              sports: 'Sports activities',
              training: 'Training workshops',
              teamBuilding: 'Team building',
              networking: 'Networking events'
            }
          },
          partnerNetwork: {
            title: 'Partner Network',
            description: 'Access exclusive discounts from 100+ trusted partners',
            features: {
              restaurant: 'Restaurant discounts',
              fitness: 'Fitness memberships',
              retail: 'Retail savings',
              services: 'Service deals'
            }
          }
        },
        benefits: {
          engagement: {
            title: 'Boost Employee Engagement',
            description: 'Keep your team motivated with perks they actually use',
            statLabel: 'engagement increase'
          },
          turnover: {
            title: 'Reduce Turnover',
            description: 'Retain top talent with meaningful benefits',
            statLabel: 'lower turnover'
          },
          wellness: {
            title: 'Improve Wellness',
            description: 'Support physical and mental health initiatives',
            statLabel: 'wellness improvement'
          },
          costs: {
            title: 'Save Costs',
            description: 'More value than traditional benefit packages',
            statLabel: 'ROI achieved'
          }
        },
        process: {
          step1: {
            title: 'Quick Setup',
            description: 'Get started in minutes with our simple onboarding process'
          },
          step2: {
            title: 'Employee Access',
            description: 'Your team gets instant access to all perks and benefits'
          },
          step3: {
            title: 'Track Impact',
            description: 'Monitor engagement and ROI with detailed analytics'
          }
        },
        cta: {
          title: 'Ready to Transform Your Employee Benefits?',
          subtitle: 'Join thousands of companies already using Kanopy solutions',
          seeHowItWorks: 'See How It Works'
        }
      },

      // Community page
      communityPage: {
        hero: {
          title: 'Beyond Discounts — We Build Connection',
          subtitle: 'Community & Events',
          description: 'Join a thriving community of professionals who connect, learn, and grow together.'
        },
        activities: {
          sports: {
            title: 'Sports Leagues',
            description: 'Football, badminton, and running clubs across companies.'
          },
          training: {
            title: 'Shared Training',
            description: 'Leadership, customer service, and digital skills workshops.'
          },
          networking: {
            title: 'Networking Dinners',
            description: 'Monthly meet-ups for founders and HR teams.'
          }
        },
        cta: {
          title: 'Join Our Community',
          description: 'Connect with like-minded professionals and grow your network',
          button: 'Get Started'
        }
      },

      // Mission page
      missionPage: {
        hero: {
          title: 'Mission & Vision',
          subtitle: 'Our purpose and goals'
        },
        mission: {
          title: 'Our Mission',
          description: 'To make employee care simple, affordable, and powerful — helping every company care like a corporation.'
        },
        vision: {
          title: 'Our Vision',
          description: 'Build Vietnam\'s first shared benefits network for all businesses — where collective power creates corporate-level perks for everyone.'
        },
        impact: {
          title: 'Our Impact'
        },
        stats: {
          employees: {
            label: '500,000+ employees in network'
          },
          discounts: {
            label: 'average vendor discounts'
          },
          value: {
            label: 'employee value per $1 spent'
          }
        },
        cta: {
          title: 'Join Our Mission',
          description: 'Be part of the movement to democratize employee benefits',
          button: 'Start Free Trial'
        }
      },

      // Stories page
      storiesPage: {
        hero: {
          title: 'Impact Stories',
          subtitle: 'Real success stories',
          description: 'See how companies like yours are transforming their employee benefits with Kanopy.'
        },
        stories: [
          {
            company: 'Café Chain',
            result: 'Saved 75% welfare costs',
            quote: 'Our staff now enjoy perks daily instead of random bonuses.',
            industry: 'Food & Beverage',
            employees: '150+ employees'
          },
          {
            company: 'Tech Startup',
            result: '+30% retention',
            quote: 'Employees finally feel cared for.',
            industry: 'Technology',
            employees: '50+ employees'
          },
          {
            company: 'Retail Company',
            result: '0 admin stress',
            quote: 'Kanopy automated everything — our HR is free again.',
            industry: 'Retail',
            employees: '100+ employees'
          }
        ],
        results: {
          title: 'Proven Results',
          stats: {
            costSavings: {
              value: '75%',
              label: 'Average cost savings'
            },
            retention: {
              value: '30%',
              label: 'Increase in retention'
            },
            adminOverhead: {
              value: '0',
              label: 'Admin overhead'
            }
          }
        },
        cta: {
          title: 'Write Your Success Story',
          subtitle: 'Join the companies already seeing amazing results',
          button: 'Start Free Trial'
        }
      },

      // Blog page
      blogPage: {
        hero: {
          title: 'Blog & Insights',
          subtitle: 'HR trends and tips',
          description: 'Stay up-to-date with the latest in employee benefits, HR trends, and business insights for companies in Vietnam.'
        },
        categories: {
          hrTrends: 'HR Trends',
          engagement: 'Engagement',
          budgetPlanning: 'Budget Planning',
          caseStudy: 'Case Study',
          roiAnalysis: 'ROI Analysis',
          remoteCulture: 'Remote Culture'
        },
        articles: {
          hrTrends: {
            title: 'HR Trends in Vietnam: What Companies Need to Know in 2025',
            excerpt: 'Discover the latest trends shaping human resources in Vietnam and how small businesses can stay competitive.',
            date: 'Oct 1, 2025'
          },
          engagement: {
            title: 'Employee Engagement Ideas for Small Businesses',
            excerpt: 'Simple yet effective strategies to boost employee engagement without breaking the bank.',
            date: 'Sep 28, 2025'
          },
          budgetPlanning: {
            title: 'Budget Planning for Employee Benefits: A Complete Guide',
            excerpt: 'Learn how to create a sustainable budget for employee benefits that works for your company.',
            date: 'Sep 25, 2025'
          },
          caseStudy: {
            title: 'Case Study: How a Tech Startup Improved Retention by 30%',
            excerpt: 'Real story of how implementing daily perks transformed company culture and reduced turnover.',
            date: 'Sep 22, 2025'
          },
          roiAnalysis: {
            title: 'The ROI of Employee Benefits: Measuring What Matters',
            excerpt: 'Understanding how to track and measure the return on investment for your employee benefits program.',
            date: 'Sep 20, 2025'
          },
          remoteCulture: {
            title: 'Building Company Culture in Remote-First Teams',
            excerpt: 'Strategies for maintaining strong company culture when your team is distributed across Vietnam.',
            date: 'Sep 18, 2025'
          }
        },
        readTime: '5 min read',
        readMore: 'Read more →',
        newsletter: {
          title: 'Stay Updated',
          description: 'Get the latest insights delivered to your inbox',
          placeholder: 'Enter your email',
          subscribe: 'Subscribe'
        }
      },

      // FAQ page
      faqPage: {
        hero: {
          title: 'Frequently Asked Questions',
          subtitle: 'Common questions answered',
          description: 'Find answers to the most common questions about Kanopy and how it can benefit your company.'
        },
        faqs: {
          cost: {
            question: 'How much does Kanopy cost?',
            answer: '25,000 VND per employee/month. No setup fees, no hidden charges.'
          },
          trial: {
            question: 'Is there a free trial?',
            answer: 'Yes! We offer a 1-year free trial for founding members. No commitments required.'
          },
          smallTeams: {
            question: 'Can small teams join?',
            answer: 'Absolutely. Even small companies can participate and benefit from our network.'
          },
          usage: {
            question: 'How do employees use perks?',
            answer: 'Through the Kanopy app with simple QR code or redemption code scanning.'
          },
          benefits: {
            question: 'What types of benefits are available?',
            answer: 'Food & beverage, health & wellness, lifestyle & leisure, and learning & growth benefits from trusted partners.'
          },
          setup: {
            question: 'How quickly can we get started?',
            answer: 'Setup takes less than 24 hours. Once approved, your employees can start using benefits immediately.'
          },
          contract: {
            question: 'Is there a minimum contract period?',
            answer: 'No minimum contract. You can cancel anytime with 30 days notice.'
          },
          analytics: {
            question: 'Do you provide analytics and reporting?',
            answer: 'Yes, we provide detailed usage analytics and ROI reporting through your HR dashboard.'
          }
        },
        contact: {
          title: 'Still Have Questions?',
          description: 'Our team is here to help you get started',
          supportButton: 'Contact Support',
          demoButton: 'Book a Demo'
        }
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'vi', // Get from localStorage or default to Vietnamese
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false
    }
  })

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng)
})

export default i18n