import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Monitor, 
  Smartphone, 
  Tablet, 
  Undo2, 
  Save,
  Eye,
  Settings
} from "lucide-react";

interface SizeSettings {
  hero: {
    height: number;
    titleSize: number;
    subtitleSize: number;
    padding: number;
  };
  services: {
    padding: number;
    cardHeight: number;
    gridGap: number;
    titleSize: number;
  };
  portfolio: {
    padding: number;
    imageHeight: number;
    gridGap: number;
  };
  founder: {
    padding: number;
    imageSize: number;
    textSize: number;
  };
  contact: {
    padding: number;
    formWidth: number;
    spacing: number;
  };
  general: {
    containerWidth: number;
    sectionSpacing: number;
  };
}

const defaultSettings: SizeSettings = {
  hero: {
    height: 100, // vh
    titleSize: 28, // responsive base
    subtitleSize: 20,
    padding: 24,
  },
  services: {
    padding: 24,
    cardHeight: 300,
    gridGap: 8,
    titleSize: 20,
  },
  portfolio: {
    padding: 24,
    imageHeight: 240,
    gridGap: 8,
  },
  founder: {
    padding: 24,
    imageSize: 300,
    textSize: 18,
  },
  contact: {
    padding: 24,
    formWidth: 600,
    spacing: 16,
  },
  general: {
    containerWidth: 1280,
    sectionSpacing: 96,
  }
};

const SizeEditor = () => {
  const [settings, setSettings] = useState<SizeSettings>(defaultSettings);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeSection, setActiveSection] = useState('hero');
  const { toast } = useToast();

  // Load saved settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('size_settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    }
  }, []);

  // Apply settings to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    // Hero settings
    root.style.setProperty('--hero-height', `${settings.hero.height}vh`);
    root.style.setProperty('--hero-title-size', `${settings.hero.titleSize}px`);
    root.style.setProperty('--hero-subtitle-size', `${settings.hero.subtitleSize}px`);
    root.style.setProperty('--hero-padding', `${settings.hero.padding}px`);
    
    // Services settings
    root.style.setProperty('--services-padding', `${settings.services.padding}px`);
    root.style.setProperty('--services-card-height', `${settings.services.cardHeight}px`);
    root.style.setProperty('--services-grid-gap', `${settings.services.gridGap * 4}px`);
    root.style.setProperty('--services-title-size', `${settings.services.titleSize}px`);
    
    // Portfolio settings
    root.style.setProperty('--portfolio-padding', `${settings.portfolio.padding}px`);
    root.style.setProperty('--portfolio-image-height', `${settings.portfolio.imageHeight}px`);
    root.style.setProperty('--portfolio-grid-gap', `${settings.portfolio.gridGap * 4}px`);
    
    // Founder settings
    root.style.setProperty('--founder-padding', `${settings.founder.padding}px`);
    root.style.setProperty('--founder-image-size', `${settings.founder.imageSize}px`);
    root.style.setProperty('--founder-text-size', `${settings.founder.textSize}px`);
    
    // Contact settings
    root.style.setProperty('--contact-padding', `${settings.contact.padding}px`);
    root.style.setProperty('--contact-form-width', `${settings.contact.formWidth}px`);
    root.style.setProperty('--contact-spacing', `${settings.contact.spacing}px`);
    
    // General settings
    root.style.setProperty('--container-max-width', `${settings.general.containerWidth}px`);
    root.style.setProperty('--section-spacing', `${settings.general.sectionSpacing}px`);
  }, [settings]);

  const updateSetting = (section: keyof SizeSettings, key: string, value: number) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const saveSettings = () => {
    localStorage.setItem('size_settings', JSON.stringify(settings));
    toast({
      title: "Settings Saved",
      description: "Your size settings have been saved successfully.",
    });
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('size_settings');
    toast({
      title: "Settings Reset",
      description: "All size settings have been reset to defaults.",
    });
  };

  const openPreview = () => {
    window.open('/', '_blank');
  };

  const renderSlider = (
    label: string,
    value: number,
    min: number,
    max: number,
    step: number,
    unit: string,
    onChange: (value: number) => void
  ) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label className="text-sm font-medium">{label}</Label>
        <Badge variant="secondary">{value}{unit}</Badge>
      </div>
      <Slider
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Visual Size Editor</h1>
            <p className="text-muted-foreground">Adjust your website sections with easy sliders</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white rounded-lg p-1">
              <Button
                variant={previewMode === 'desktop' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setPreviewMode('desktop')}
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button
                variant={previewMode === 'tablet' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setPreviewMode('tablet')}
              >
                <Tablet className="w-4 h-4" />
              </Button>
              <Button
                variant={previewMode === 'mobile' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setPreviewMode('mobile')}
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
            <Button onClick={openPreview} variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button onClick={resetSettings} variant="outline">
              <Undo2 className="w-4 h-4 mr-2" />
              Reset
            </Button>
            <Button onClick={saveSettings}>
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Panel */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Size Controls
                </CardTitle>
                <CardDescription>
                  Adjust the size and spacing of different sections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeSection} onValueChange={setActiveSection}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="hero">Hero</TabsTrigger>
                    <TabsTrigger value="services">Services</TabsTrigger>
                  </TabsList>
                  <TabsList className="grid w-full grid-cols-2 mt-2">
                    <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                    <TabsTrigger value="founder">Founder</TabsTrigger>
                  </TabsList>
                  <TabsList className="grid w-full grid-cols-2 mt-2">
                    <TabsTrigger value="contact">Contact</TabsTrigger>
                    <TabsTrigger value="general">General</TabsTrigger>
                  </TabsList>

                  <div className="mt-6 space-y-6">
                    <TabsContent value="hero" className="space-y-4">
                      {renderSlider(
                        "Section Height",
                        settings.hero.height,
                        50, 150, 5, "vh",
                        (value) => updateSetting('hero', 'height', value)
                      )}
                      {renderSlider(
                        "Title Size",
                        settings.hero.titleSize,
                        20, 60, 2, "px",
                        (value) => updateSetting('hero', 'titleSize', value)
                      )}
                      {renderSlider(
                        "Subtitle Size",
                        settings.hero.subtitleSize,
                        14, 32, 2, "px",
                        (value) => updateSetting('hero', 'subtitleSize', value)
                      )}
                      {renderSlider(
                        "Padding",
                        settings.hero.padding,
                        12, 48, 4, "px",
                        (value) => updateSetting('hero', 'padding', value)
                      )}
                    </TabsContent>

                    <TabsContent value="services" className="space-y-4">
                      {renderSlider(
                        "Section Padding",
                        settings.services.padding,
                        12, 48, 4, "px",
                        (value) => updateSetting('services', 'padding', value)
                      )}
                      {renderSlider(
                        "Card Height",
                        settings.services.cardHeight,
                        200, 500, 20, "px",
                        (value) => updateSetting('services', 'cardHeight', value)
                      )}
                      {renderSlider(
                        "Grid Gap",
                        settings.services.gridGap,
                        4, 16, 2, "×4px",
                        (value) => updateSetting('services', 'gridGap', value)
                      )}
                      {renderSlider(
                        "Title Size",
                        settings.services.titleSize,
                        16, 32, 2, "px",
                        (value) => updateSetting('services', 'titleSize', value)
                      )}
                    </TabsContent>

                    <TabsContent value="portfolio" className="space-y-4">
                      {renderSlider(
                        "Section Padding",
                        settings.portfolio.padding,
                        12, 48, 4, "px",
                        (value) => updateSetting('portfolio', 'padding', value)
                      )}
                      {renderSlider(
                        "Image Height",
                        settings.portfolio.imageHeight,
                        160, 400, 20, "px",
                        (value) => updateSetting('portfolio', 'imageHeight', value)
                      )}
                      {renderSlider(
                        "Grid Gap",
                        settings.portfolio.gridGap,
                        4, 16, 2, "×4px",
                        (value) => updateSetting('portfolio', 'gridGap', value)
                      )}
                    </TabsContent>

                    <TabsContent value="founder" className="space-y-4">
                      {renderSlider(
                        "Section Padding",
                        settings.founder.padding,
                        12, 48, 4, "px",
                        (value) => updateSetting('founder', 'padding', value)
                      )}
                      {renderSlider(
                        "Image Size",
                        settings.founder.imageSize,
                        200, 500, 25, "px",
                        (value) => updateSetting('founder', 'imageSize', value)
                      )}
                      {renderSlider(
                        "Text Size",
                        settings.founder.textSize,
                        14, 24, 2, "px",
                        (value) => updateSetting('founder', 'textSize', value)
                      )}
                    </TabsContent>

                    <TabsContent value="contact" className="space-y-4">
                      {renderSlider(
                        "Section Padding",
                        settings.contact.padding,
                        12, 48, 4, "px",
                        (value) => updateSetting('contact', 'padding', value)
                      )}
                      {renderSlider(
                        "Form Width",
                        settings.contact.formWidth,
                        400, 800, 50, "px",
                        (value) => updateSetting('contact', 'formWidth', value)
                      )}
                      {renderSlider(
                        "Element Spacing",
                        settings.contact.spacing,
                        8, 32, 4, "px",
                        (value) => updateSetting('contact', 'spacing', value)
                      )}
                    </TabsContent>

                    <TabsContent value="general" className="space-y-4">
                      {renderSlider(
                        "Max Container Width",
                        settings.general.containerWidth,
                        1000, 1600, 40, "px",
                        (value) => updateSetting('general', 'containerWidth', value)
                      )}
                      {renderSlider(
                        "Section Spacing",
                        settings.general.sectionSpacing,
                        48, 160, 8, "px",
                        (value) => updateSetting('general', 'sectionSpacing', value)
                      )}
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  See your changes in real-time. Open the preview in a new tab to see the full effect.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`
                  bg-white border rounded-lg overflow-hidden
                  ${previewMode === 'mobile' ? 'max-w-sm mx-auto' : 
                    previewMode === 'tablet' ? 'max-w-2xl mx-auto' : 'w-full'}
                `}>
                  <iframe
                    src="/"
                    className="w-full h-96 border-0"
                    title="Website Preview"
                  />
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Tip:</strong> Click "Preview" to open the full website in a new tab and see all your changes. 
                    Changes are applied instantly!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeEditor;