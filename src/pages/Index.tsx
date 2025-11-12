import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    { 
      icon: 'Scissors', 
      title: 'Пошив на заказ', 
      description: 'Создание уникальной одежды по вашим меркам и эскизам',
      price: 'от 8 000 ₽'
    },
    { 
      icon: 'Shirt', 
      title: 'Ремонт одежды', 
      description: 'Профессиональный ремонт любой сложности',
      price: 'от 500 ₽'
    },
    { 
      icon: 'Ruler', 
      title: 'Подгонка по фигуре', 
      description: 'Идеальная посадка вашей одежды',
      price: 'от 1 500 ₽'
    },
    { 
      icon: 'Sparkles', 
      title: 'Реставрация', 
      description: 'Возвращаем вторую жизнь любимым вещам',
      price: 'от 2 000 ₽'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Великолепная работа! Платье село идеально, качество пошива на высшем уровне. Спасибо за профессионализм!',
      date: '15 октября 2024'
    },
    {
      name: 'Мария Соколова',
      rating: 5,
      text: 'Очень довольна результатом! Быстро починили мою любимую куртку, теперь как новая. Обязательно вернусь снова.',
      date: '8 ноября 2024'
    },
    {
      name: 'Елена Васильева',
      rating: 5,
      text: 'Потрясающее ателье! Сшили костюм на свадьбу - все гости были в восторге. Рекомендую от всей души!',
      date: '22 октября 2024'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-cormorant">Модный сезон</h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Услуги</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Контакты</a>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 963 722 48 32
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-cormorant font-bold mb-6 leading-tight">
                Искусство<br />создавать<br />совершенство
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Воплощаем ваши идеи в изысканную одежду с безупречным качеством и утонченным стилем
              </p>
              <Button size="lg" className="text-lg px-8">
                Записаться на консультацию
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7cc7408f-13d4-4a5a-8ce9-32404b7d9f18/files/e491c058-bfd6-4ecd-8d7f-ed0a1582398b.jpg"
                alt="Модный сезон интерьер"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Профессиональный подход к каждой детали</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-cormorant font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-lg font-semibold text-secondary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Нам доверяют самое ценное</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4 text-foreground/90">{testimonial.text}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Мы ответим на все ваши вопросы</p>
          
          <Card className="border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Анна Иванова"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем заказе..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-secondary" />
                  <span>Москва, ул. Тверская, 12</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-secondary" />
                  <span>+7 963 722 48 32</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-secondary" />
                  <span>Пн-Сб: 10:00 - 20:00, Вс: выходной</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Модный сезон. Все права защищены.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/79637224832"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Написать в WhatsApp"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}